const menuBar = document.querySelector(".menuBar")
const menu = document.querySelector(".menu-links")
const closeBtn = document.querySelector(".closeBtn")

window.addEventListener("resize",function(){
    if(this.window.innerWidth < 675){
        menuBar.classList.remove("hidden")
    }else{
        menuBar.classList.add("hidden")
    }
})

function openMenu() {
    menu.classList.remove("hidden")
    menuBar.classList.add("hidden")
    closeBtn.classList.remove("hidden")
}

function closeMenu() {
    menu.classList.add("hidden")
    menuBar.classList.remove("hidden")
    closeBtn.classList.add("hidden")
}

menuBar.addEventListener("click", openMenu)
closeBtn.addEventListener("click", closeMenu)
