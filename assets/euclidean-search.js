const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {

  const value = e.target.value.toLowerCase()
  const xy = value.split(' ')

  users.forEach(user => {

    if (parseFloat(value.length) < 3) {
      user.element.classList.toggle("hide", true)
    } else {
      var distance = Math.sqrt(
        Math.pow(parseFloat(xy[0]) - parseFloat(user.x), 2) +
        Math.pow(parseFloat(xy[1]) - parseFloat(user.y), 2))
      const isVisible =
        user.name.toLowerCase().includes(value) || distance <= 10
      user.element.classList.toggle("hide", !isVisible)
    }
  })
})

fetch("https://ucc.ar/_clusters/clusters.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      card.querySelector("a").setAttribute("href", "https://ucc.ar/_clusters/" + user.url)
      header.textContent = user.name
      body.textContent = user.company
      card.classList.add('hide');
      userCardContainer.append(card)
      return {
        name: user.name,
        x: user.x,
        y: user.y,
        element: card
      }
    })
  })