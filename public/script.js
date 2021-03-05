async function windowActions() {
  console.log("Window Loaded");
  const form = document.querySelector(".userform");
  const search = document.querySelector("#Zipcode");
  const targetList = document.querySelector('.target-list');

  const request = await fetch('/api');
  const data = await request.json();

  form.addEventListener("input", async (event) => {
    event.preventDefault();
    console.log("submit fired");
    const filtered = data.filter(record => record.zip === search.value);
   
    filtered.forEach(item => {
      const appendItem = document.createElement("li");
      appendItem.classList.add('list-item')
      appendItem.innerHTML = `
      <h2> ${item.name} </h2>
      <p> ${item.category} </p>
      <p> ${item.address_line_1} </p>
      <p> ${item.city} </p>
      <p> ${item.zip} </p>
      `;
      targetList.append(appendItem);
    });
  });

  search.addEventListener('input', (event) => {
    console.log('input', event.target.value);
  });
}
window.onload = windowActions;
