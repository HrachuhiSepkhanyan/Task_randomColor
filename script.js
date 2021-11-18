const width = window.innerWidth;
const height = window.innerHeight;
const screenArea = width * height;
const spaceForEveryDiv = 40 * 40;
const quantityDiv = Math.floor(screenArea / spaceForEveryDiv);

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return "rgb(" + color.join(", ") + ")";
}

function resetColor() {
    document
        .querySelectorAll(".div")
        .forEach((item) => (item.style.backgroundColor = "#fff"));
}
for (let i = 0; i < quantityDiv; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "div");
    div.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = randomColor();
    });
    div.addEventListener("click", resetColor);
    document.querySelector("body").appendChild(div);
}