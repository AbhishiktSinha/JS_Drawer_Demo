const drawer = document.createElement("aside");
// styling the drawer
drawer.id = "drawer";
drawer.setAttribute("data-isVisible", "false")

const body = document.querySelector("body");
body.appendChild(drawer);

const main = document.querySelector("main");

const toggleButton = document.querySelector("button.drawer-toggle-button");
toggleButton.addEventListener("click", (event) => {

    drawer.style.transition = "left 0.6s ease";
    drawer.style.left = "0%";
    drawer.setAttribute("data-isVisible", "true");

    body.style.overflowY = "hidden";
    main.style.filter = "brightness(50%)";
    event.stopPropagation();
})

body.addEventListener("click", (event) => {
    if (!drawer.contains(event.target) && drawer.getAttribute("data-isVisible") === "true") {
        console.log(event.target);
        drawer.style.left = "-40%";
        body.style.overflowY = "scroll";
        main.style.filter = "brightness(100%)";
        // drawer.style.display: no

    }
})

function cardClick(event) {
    if (event.target.getAttribute("data-isBlack") === "false") {
        event.target.style.backgroundColor = "black";
        event.target.setAttribute("data-isBlack", "true");
    }
    else {
        event.target.style.backgroundColor = "#433099";
        event.target.setAttribute("data-isBlack", "false");

    }
}
