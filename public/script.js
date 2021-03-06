async function windowActions() {
  console.log("Window Loaded");
  const form = document.querySelector(".userform");
  const search = document.querySelector("#Zipcode");
  const targetList = document.querySelector(".target-list");

  const request = await fetch("/api");
  const data = await request.json();
  //event.preventDefault();
  
  
  function displayMatches (){
    console.log("submit fired");
    const filtered = data.filter((record) =>
    record.zip.includes(event.target.value)
    );
    //console.log(filtered);
    const html = filtered.map(zip => {
      return `
      <li>
        <span class = "name">${zip.name}</span>
        <span class = "notName">${zip.category}</span>
        <span class = "notName">${zip.address_line_1}</span>
        <span class = "notName">${zip.city}</span>
        <span class = "notName">${zip.zip}</span>
      `;
    }).join('');
    targetList.innerHTML = html;
  };

  search.addEventListener('input', (event) => {
  console.log('input', event.target.value);
  });

form.addEventListener("keyup", displayMatches);
}
window.onload = windowActions;


