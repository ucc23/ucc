const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  const xy = value.split(' ')
  users.forEach(user => {
  
  var distance = Math.sqrt(Math.pow(parseFloat(xy[0]) - parseFloat(user.lat), 2) + Math.pow(parseFloat(xy[1]) - parseFloat(user.lon), 2))
  
    const isVisible =
      user.name.toLowerCase().includes(value) || distance <= 10
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("{{ site.baseurl }}/_clusters/clusters_DB.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = user.name
      body.textContent = user.email
      userCardContainer.append(card)
      return {
        name: user.name,
        lon: user.x,
        lat: user.y,
        element: card
      }
    })
  })