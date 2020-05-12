(function(){
const openingBtn = document.querySelector(".sidebar__hamburger");
const closingBtn = document.querySelector(".sidebar__close");
const sidebar = document.querySelector(".sidebar");


openingBtn.addEventListener("click", sidebarOpen);
closingBtn.addEventListener("click", sidebarClosed);
function sidebarOpen(){
   sidebar.classList.add("sidebar--opened");
}
function sidebarClosed(){
    sidebar.classList.remove("sidebar--opened");
}
}())
