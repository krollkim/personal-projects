const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header.container ");
const menu_links = document.querySelectorAll(".header .nav-bar .nav-list ul li a");


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () =>{
    let scroll_position = window.scrollY;
    if(scroll_position > 250){
      header.style.backgroundColor = '#29323c';
    }else{
      header.style.backgroundColor = 'transparent';
    }
      console.log(header) 
})

menu_links.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove('active');
    mobile_menu.classList.remove('active');
  });
});
