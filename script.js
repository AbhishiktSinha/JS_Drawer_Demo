const drawer = document.createElement("aside");
const drawerContainer = document.createElement("div");

// styling the drawer
drawerContainer.id="drawer-container";

drawer.id = "drawer";
drawer.setAttribute("data-isVisible", "false")


const body = document.querySelector("body");

const main = document.querySelector("main");

const toggleButton = document.querySelector("button.drawer-toggle-button");

toggleButton.addEventListener("click", (event) => {
    
    body.appendChild(drawerContainer);
    drawerContainer.appendChild(drawer);
    
    body.style.overflowY = "hidden";
    
    setTimeout(()=>{
        drawer.style.transition="left 0.2s ease";
        drawer.style.left = "0%";
        drawer.setAttribute("data-isVisible", "true");
    }, 100);
    
    event.stopPropagation();
})

drawerContainer.addEventListener("click", (event) => {
    if (!drawer.contains(event.target) && drawer.getAttribute("data-isVisible") === "true") {
        console.log(event.target);

        setTimeout(()=>{
            drawer.style.transition="left 0.2s ease";
            drawer.style.left = "-41%";        
            drawer.setAttribute("isVisible", "false");                
        }, 50);
        
        setTimeout(()=>{
            body.removeChild(drawerContainer);
            body.style.overflowY = "scroll";
        },90);
        
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
