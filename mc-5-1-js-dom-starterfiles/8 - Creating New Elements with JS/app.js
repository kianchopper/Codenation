const input = document.getElementById("input");
const button = document.getElementById("submit");
let list = document.getElementsByTagName("ul")[0];

button.addEventListener("click", ()=> {
    let listItem = documentCreateElement("li");
    listItem.textContent = input.value;
});
