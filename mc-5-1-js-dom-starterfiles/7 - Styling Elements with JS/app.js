const button = document.getElementById("submit");
let hidden = false;

button.addEventListener("click", () => {
    if (image.style.display == "none") {
        image.style.display = "block";
        button.textContent = "hide";
    } else {
        image.style.display = "none";
        button.textContent = "none"
    }
})