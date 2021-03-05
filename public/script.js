async function windowActions() {
  console.log("Window Loaded");
  const form = document.querySelector(".userform");
  const search = document.querySelector("#Zipcode");
  const targetList = document.querySelector('target-list');

  const request = await fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  body: JSON.stringify({data: search.value})
  });
  const data = await request.json();

  form.addEventListener("keyup", async (event) => {
    event.preventDefault();
<<<<<<< Updated upstream
    console.log("submit fired", search.value);
    const filtered = data.filter((record) => record.city.toUpperCase() === search.value.toUpperCase);
    filtered.forEach((item) => {
        const appendItem = document.createElement("li");
        appendItem.innerText = item.name;
        targetList.append(appendItem);
    });
  });

  search.addEventListener('input', (event) => {
    console.log('input', event.target.value);
=======
    console.log("submit fired");
});
   
    const food = [];

    function findMatches(wordToMatch, food) {
      return food.filter((place) => {
        const regex = new RegExp(wordToMatch, "gi");
        return place.zip.match(regex);
      });
    }
    function displayMatches() {
      const matchArray = findMatches(this.value, food);
      const html = matchArray
        .map((place) => {
          const regex = new RegExp(this.value, "gi");
          const zipper = place.zip.replace(
            regex,
            `<span class = h1>${this.value}</span>`
          );
          return `
        <li>
            <span class="name">${zipper}</span>
            <span class="category">${place.category}</span>
            <span class="address_line_1">${place.address_line_1}</span>
            <span class="city">${place.city}</span>
            <span class="zip">${place.zip}</span>
        </li>
        `;
        })
        .join("");
      suggestions.innerHTML = html;
    } 
  
}
>>>>>>> Stashed changes

  });


<<<<<<< Updated upstream
}
window.onload = windowActions;
=======
    const request = await fetch("/api", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ data: searchInput.value }),
     });
>>>>>>> Stashed changes
