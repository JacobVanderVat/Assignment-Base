async function windowActions() {
  const search = document.querySelector("input");
  const form = document.querySelector("control");

  const request = await fetch("/api");
  const data = await request.json();


  form.addEventListener("keyup", async (event) => {
    event.preventDefault();
    
});
   
    /*const food = [];

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
    } */
  
}

window.onload = windowActions;


   // const request = await fetch("/api", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ data: searchInput.value }),
    // });