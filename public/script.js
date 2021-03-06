async function windowActions() {
  console.log("Window Loaded");
  const form = document.querySelector(".userform");
  const search = document.querySelector("#Zipcode");
  const targetList = document.querySelector(".target-list");

  const request = await fetch("/api");
  const data = await request.json();
  //event.preventDefault();

  function displayMatches() {
    console.log("submit fired");
    const filtered = data.filter((record) =>
      record.zip.includes(event.target.value)
    );
    //console.log(filtered);
    const html = filtered
      .map((zip) => {
        return `
      <li>
        <div class = "name">${zip.name}:</div>
        <div>${zip.category}</div>
        <div>${zip.address_line_1}, ${zip.city}</div>
        <div>${zip.zip}</div>
      </li>
      `;
      })
      .join("");
    targetList.innerHTML = html;
  }

  search.addEventListener("input", (event) => {
    console.log("input", event.target.value);
  });

  form.addEventListener("keyup", displayMatches);
}
window.onload = windowActions;
