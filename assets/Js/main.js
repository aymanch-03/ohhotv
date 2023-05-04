var typed = new Typed(".auto-input", {
    strings: ["surplus", "coupure", "limite"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
})


const navMenu = document.querySelector(".responsive-list");
const navBtn = document.querySelector(".h41");

navBtn.addEventListener("click", () =>{
    navMenu.classList.toggle("activemenu")
})

const closeBtn = document.querySelector(".fa-xmark");

closeBtn.addEventListener("click", () =>{
    navMenu.classList.remove("activemenu")
})



