// function openNav() {
//     document.querySelector(".menuList").classList.toggle(".show");
//     document.body.classList.toggle("overflow-hidden");
//     document.querySelector(".menuIcon").classList.toggle("cross")
// }
const menuIcon = document.querySelector(".menuIcon")
const menulist = document.querySelector(".menulist")


menuIcon.addEventListener("click", function () {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overFlowHidden")
    document.querySelector(".menuIcon").classList.toggle("cross")
})