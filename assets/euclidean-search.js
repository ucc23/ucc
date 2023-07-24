const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []
let results = []

searchInput.addEventListener("input", e => {
  results = []; //quickly empty array
  userCardContainer.innerHTML = "";

  const value = e.target.value.toLowerCase()
  const xy = value.split(' ')

  // wait for 4 chars
  if (parseFloat(value.length) >= 4) {
    users.forEach(user => {

      // For galactic coordinates search
      if (xy[0] == "g") ||  (xy[0] == "G") {
        var distance = Math.sqrt(
          Math.pow(parseFloat(xy[1]) - parseFloat(user.lon), 2) +
          Math.pow(parseFloat(xy[2]) - parseFloat(user.lat), 2))
      // For equatorial coordinates search
      } else{
        var distance = Math.sqrt(
          Math.pow(parseFloat(xy[0]) - parseFloat(user.ra), 2) +
          Math.pow(parseFloat(xy[1]) - parseFloat(user.dec), 2))
      }
      let fvalue = value.replace(" ", "").replace("_", "").replace("-", "").replace("+", "p").replace(".", "")

      // 1 deg search region
      const isVisible = user.fnames.includes(fvalue) || distance <= 1

      if (isVisible) {
        user.distance = distance
        results.push(
          user
        );
      }
    })
  }
  // Sort and limit results
  results.sort((a, b) => a.distance - b.distance)
  results = results.slice(0, 10)
  results.forEach((u) => {
    userCardContainer.append(u.element);
  });
})


fetch("/_clusters/clusters.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      card.querySelector("a").setAttribute("href", "https://ucc.ar/_clusters/" + user.fnames.split(';')[0])
      header.textContent = user.ID
      body.textContent = user.UCC_ID
      return {
        fnames: user.fnames,
        ra: user.RA_ICRS,
        dec: user.DE_ICRS,
        lon: user.GLON,
        lat: user.GLAT,
        element: card
      }
    })
  })
