let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav-bar");
let name = document.querySelector(".com-name");

menu.addEventListener("click",()=>{
    nav.classList.toggle("show");
    name.classList.toggle('show-1')
})

let drop = document.querySelector('.drop').addEventListener('click',()=>{
    let menu = document.querySelector('.solutions-menu').classList.toggle('display');
});

