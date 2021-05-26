//cycle over the list items and apply colors from the array called colours
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
const listItems = document.querySelectorAll("li");

console.log(listItems);
console.log(listItems.length); //5

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = colours[i];
}

submit.addEventListener("click", () =>{
    placeholder.style.color = "goldenrod";
    placeholder.textContent = `<li>${input.value}</li>`;
})
