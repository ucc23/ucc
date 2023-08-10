
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []
let results = []

searchInput.addEventListener("input", e => {

  results = []; //quickly empty array
  userCardContainer.innerHTML = "";

  const value = e.target.value.toLowerCase()

  // wait for 4 chars
  if (parseFloat(value.length) >= 4) {
    users.forEach(user => {

      const xy = value.split(' ')
      var show_e_1 = false
      var show_e_2 = false
      var show_e_3 = false
      var distance

      if (xy[0].match(/^\d/)) { // Eq coordinates, check if first char is a number
          var distance = Math.sqrt(
          Math.pow(parseFloat(xy[0]) - parseFloat(user.RA), 2) +
          Math.pow(parseFloat(xy[1]) - parseFloat(user.DEC), 2))
        var show_e_3 = true;
      } else if (xy[0] == "g") { // galactic coordinates
        var distance = Math.sqrt(
          Math.pow(parseFloat(xy[1]) - parseFloat(user.GLON), 2) +
          Math.pow(parseFloat(xy[2]) - parseFloat(user.GLAT), 2))
        var show_e_2 = true;
      } else {  // Search method based on text
        let fvalue = value.replace(" ", "").replace("_", "").replace("-", "").replace("+", "p").replace(".", "")
        if (user.fnames.includes(fvalue)) {
          // The division by 10 is so that this distance is compatible with
          // the Euclidean distance in the other blocks
          var distance = findMinimumDistance(fvalue, user.fnames, levenshteinDistance)/10;
          var show_e_1 = true;
        }
      }

      // Condition to show card. This value seems reasonable
      const isVisible = distance < 2

      if (isVisible) {
        user.distance = distance
        user.show_e_1 = show_e_1
        user.show_e_2 = show_e_2
        user.show_e_3 = show_e_3
        results.push(user)
      }
    })
  }

  // Sort and limit results
  results.sort((a, b) => a.distance - b.distance)
  results = results.slice(0, 9)
  results.forEach((u) => {
    if (u.show_e_1) {
      userCardContainer.append(u.element_1);
    } else if (u.show_e_2) {
      userCardContainer.append(u.element_2);
    } else if (u.show_e_3) {
      userCardContainer.append(u.element_3)
    }
  });
})


// Source: https://stackoverflow.com/a/18514751/1391441
// This implementation combines speed with brevity of code
var levenshteinDistance = (function() {
        var row2 = [];
        return function(s1, s2) {
            if (s1 === s2) {
                return 0;
            } else {
                var s1_len = s1.length, s2_len = s2.length;
                if (s1_len && s2_len) {
                    var i1 = 0, i2 = 0, a, b, c, c2, row = row2;
                    while (i1 < s1_len)
                        row[i1] = ++i1;
                    while (i2 < s2_len) {
                        c2 = s2.charCodeAt(i2);
                        a = i2;
                        ++i2;
                        b = i2;
                        for (i1 = 0; i1 < s1_len; ++i1) {
                            c = a + (s1.charCodeAt(i1) === c2 ? 0 : 1);
                            a = row[i1];
                            b = b < a ? (b < c ? b + 1 : c) : (a < c ? a + 1 : c);
                            row[i1] = b;
                        }
                    }
                    return b;
                } else {
                    return s1_len + s2_len;
                }
            }
        };
})();


function findMinimumDistance(fvalue, fnames, dist_func) {
    let minDistance = Infinity;
    for (const randomStr of fnames.split(';')) {
        const distance = dist_func(fvalue, randomStr);
        minDistance = Math.min(minDistance, distance);
    }
    return minDistance;
}


fetch("clusters.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {

      const card_1 = userCardTemplate.content.cloneNode(true).children[0]
      const card_2 = userCardTemplate.content.cloneNode(true).children[0]
      const card_3 = userCardTemplate.content.cloneNode(true).children[0]

      const header_1 = card_1.querySelector("[data-header]")
      const header_2 = card_2.querySelector("[data-header]")
      const header_3 = card_3.querySelector("[data-header]")

      const body_1 = card_1.querySelector("[data-body_1]")
      const body_2 = card_2.querySelector("[data-body_2]")
      const body_3 = card_3.querySelector("[data-body_3]")

      card_1.querySelector("a").setAttribute("href", "https://ucc.ar/_clusters/" + user.fnames.split(';')[0])
      card_2.querySelector("a").setAttribute("href", "https://ucc.ar/_clusters/" + user.fnames.split(';')[0])
      card_3.querySelector("a").setAttribute("href", "https://ucc.ar/_clusters/" + user.fnames.split(';')[0])

      header_1.textContent = user.ID
      header_2.textContent = user.ID
      header_3.textContent = user.ID

      body_1.textContent = user.fnames.split(';').slice(1, 3)
      body_2.textContent = 'G (' + user.GLON + ', ' + user.GLAT + ')'
      body_3.textContent = 'E (' + user.RA_ICRS + ', ' + user.DE_ICRS + ')'

      return {
        fnames: user.fnames,
        GLON: user.GLON,
        GLAT: user.GLAT,
        RA: user.RA_ICRS,
        DEC: user.DE_ICRS,
        element_1: card_1,
        element_2: card_2,
        element_3: card_3
      }
    })
  })
