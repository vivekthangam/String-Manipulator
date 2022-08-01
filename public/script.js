const sideMenu = document.querySelector("aside");
const menuButton = document.querySelector("#menu-btn");
const closeButton = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuButton.addEventListener("click",()=>{
    sideMenu.style.display='block';
    console.log("hello");
})

closeButton.addEventListener("click",()=>{
    sideMenu.style.display='none';
    console.log("hello")
})


themeToggler.addEventListener("click",()=>{
    document.body.classList.toggle('dark-theme-variables');
    
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})