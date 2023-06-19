const toggleBtn = document.getElementsByClassName("toggle")[0];
const fourMenu = document.getElementsByClassName("four-menu")[0];
toggleBtn.addEventListener("click", ()=> {
    fourMenu.classList.toggle("active");
})
