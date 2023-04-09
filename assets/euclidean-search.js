// const userCardTemplate = document.querySelector("[data-user-template]")
// const userCardContainer = document.querySelector("[data-user-cards-container]")
// const searchInput = document.querySelector("[data-search]")

// let users = []

// searchInput.addEventListener("input", e => {
//   const value = e.target.value.toLowerCase()
//   users.forEach(user => {
//     const isVisible =
//       user.name.toLowerCase().includes(value) ||
//       user.email.toLowerCase().includes(value)
//     user.element.classList.toggle("hide", !isVisible)
//   })
// })

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(data => {
//     users = data.map(user => {
//       const card = userCardTemplate.content.cloneNode(true).children[0]
//       const header = card.querySelector("[data-header]")
//       const body = card.querySelector("[data-body]")
//       header.textContent = user.name
//       body.textContent = user.email
//       userCardContainer.append(card)
//       return { name: user.name, email: user.email, element: card }
//     })
//   })


// Load the catalogue entries from a JSON file
var catalogueEntries;
$.getJSON('{{ site.baseurl }}/_clusters/clusters_DB.json', function(data) {
    catalogueEntries = data;
});

// Function to perform the spatial search
function searchByDistance(x, y) {
    var results = [];
    for (var i = 0; i < catalogueEntries.length; i++) {
        var entry = catalogueEntries[i];
        var distance = Math.sqrt(Math.pow(x - entry.x, 2) + Math.pow(y - entry.y, 2));
        if (distance <= 10) {
            results.push(entry);
        }
    }
    return results;
}
