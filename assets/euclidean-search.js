
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
          var show_e_1 = true;
        }
      }

      // Condition to show card
      const isVisible = show_e_1 || distance <= 1

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


fetch("/_clusters/clusters.json")
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
      body_2.textContent = '(' + user.GLON + ', ' + user.GLAT + ')'
      body_3.textContent = '(' + user.RA_ICRS + ', ' + user.DE_ICRS + ')'

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



// const userCardTemplate = document.querySelector("[data-user-template]")
// const userCardContainer = document.querySelector("[data-user-cards-container]")
// const searchInput = document.querySelector("[data-search]")

// let users = []
// let results = []

// searchInput.addEventListener("input", e => {
//   results = []; //quickly empty array
//   userCardContainer.innerHTML = "";

//   const value = e.target.value.toLowerCase()
//   const xy = value.split(' ')

//   // wait for 4 chars
//   if (parseFloat(value.length) >= 4) {
//     users.forEach(user => {

//       var distance;
//       // For galactic coordinates search
//       if (xy[0] == "g") { // ||  (xy[0] == "G")
//         var distance = Math.sqrt(
//           Math.pow(parseFloat(xy[1]) - parseFloat(user.lon), 2) +
//           Math.pow(parseFloat(xy[2]) - parseFloat(user.lat), 2))
//       // For equatorial coordinates search
//       } else{
//         var distance = Math.sqrt(
//           Math.pow(parseFloat(xy[0]) - parseFloat(user.ra), 2) +
//           Math.pow(parseFloat(xy[1]) - parseFloat(user.dec), 2))
//       }
//       let fvalue = value.replace(" ", "").replace("_", "").replace("-", "").replace("+", "p").replace(".", "")

//       // 1 deg search region
//       const isVisible = user.fnames.includes(fvalue) || distance <= 1

//       if (isVisible) {
//         user.distance = distance
//         results.push(
//           user
//         );
//       }
//     })
//   }
//   // Sort and limit results
//   results.sort((a, b) => a.distance - b.distance)
//   results = results.slice(0, 10)
//   results.forEach((u) => {
//     userCardContainer.append(u.element);
//   });
// })


// fetch("/_clusters/clusters.json")
//   .then(res => res.json())
//   .then(data => {
//     users = data.map(user => {
//       const card = userCardTemplate.content.cloneNode(true).children[0]
//       const header = card.querySelector("[data-header]")
//       const body = card.querySelector("[data-body]")
//       card.querySelector("a").setAttribute("href", "https://ucc.ar/_clusters/" + user.fnames.split(';')[0])
//       header.textContent = user.ID
//       body.textContent = user.UCC_ID
//       return {
//         fnames: user.fnames,
//         ra: user.RA_ICRS,
//         dec: user.DE_ICRS,
//         lon: user.GLON,
//         lat: user.GLAT,
//         element: card
//       }
//     })
//   })
