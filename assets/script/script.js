const navToggle = document.querySelector(".nav-toggle")
const showLink = document.querySelector(".links")

navToggle.addEventListener("click", function(){
    showLink.classList.toggle("show-links")
})