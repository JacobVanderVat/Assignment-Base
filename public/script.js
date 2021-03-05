async function windowActions() {
  console.log("Window Loaded");
  const form = document.querySelector(".userform");
  const search = document.querySelector("#Zipcode");
  const targetList = document.querySelector('.target-list');

  const request = await fetch('/api');
  const data = await request.json();

  form.addEventListener("keyup", async (event) => {
    event.preventDefault();
    console.log("submit fired");
    console.log(search.value);
    const filtered = data.filter(record => record.zip === search.value);
    console.log(filtered);
    filtered.forEach((item) => {
        const appendItem = document.createElement("li");
        appendItem.innerText = item.name;
        targetList.append(appendItem);
        appendItem.innerText = item.category;
        targetList.append(appendItem);
        //appendItem.innerText = item.address_line_1;
        //targetList.append(appendItem);
        //appendItem.innerText = item.zip;
        //targetList.append(appendItem);
    });
  });

  search.addEventListener('input', (event) => {
    console.log('input', event.target.value);
  });


}
window.onload = windowActions;
