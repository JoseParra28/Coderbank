const navToggle = document.querySelector(".nav-toggle")
const showLink = document.querySelector(".links")
const featureBtns = document.querySelectorAll(".features-btns button")
const textContainers = document.querySelectorAll(".text-containers .card")

navToggle.addEventListener("click", function(){
    showLink.classList.toggle("show-links")
})


const featureFunc = e => {
    document.querySelector(".hide").classList.remove(".hide")
    e.target.classList.add(".hide")
    console.log(e.target)

    textContainers.forEach(card => {
        if (card.dataset.id === e.target.dataset.id){
            card.classList.remove("hide")
        }else {
            card.classList.add("hide")
        }
    })
}

featureBtns.forEach(button => button.addEventListener("click", featureFunc))
