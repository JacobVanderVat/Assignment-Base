async function windowActions() {
  console.log("Window Loaded");
  const form = document.querySelector(".userform");
  const search = document.querySelector("#Zipcode");
  const targetList = document.querySelector('.target-list');

  const request = await fetch('/api');
  const data = await request.json();
  //console.table(data);

  form.addEventListener("keyup", async (event) => {
    event.preventDefault();
    console.log("submit fired", search.value);
    const filtered = data.filter((record) => record.city.toUpperCase() === search.value.toUpperCase());
    console.log(filtered);
    filtered.forEach((item) => {
        const appendItem = document.createElement("li");
        appendItem.innerText = item.city;
        targetList.append(appendItem);
    });
  });

  search.addEventListener('input', (event) => {
    console.log('input', event.target.value);
  });


}
window.onload = windowActions;


//record.city.toUpperCase() === search.value.toUpperCase()