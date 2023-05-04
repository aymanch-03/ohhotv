const navMenu = document.querySelector(".responsive-list");
const navBtn = document.querySelector(".h41");

navBtn.addEventListener("click", () =>{
    navMenu.classList.toggle("activemenu")
})

const closeBtn = document.querySelector(".fa-xmark");

closeBtn.addEventListener("click", () =>{
    navMenu.classList.remove("activemenu")
})
//     const dropBtn = document.querySelector(".dd-title");
// const dropMenu = document.querySelector(".dd-text");
// const f45374ff = document.querySelector(".dd-title");
// var color = 'white'

// dropBtn.addEventListener("click", () =>{
//     dropMenu.classList.toggle("activeDropMenu")
//     f45374ff.classList.toggle("f45374ffBg")
    

// })