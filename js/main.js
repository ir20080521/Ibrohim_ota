let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let activeBtn = "featured";
const menuBtns = document.querySelectorAll('.menu-btn');
const foodItems = document.querySelectorAll('.food-item');

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
  btn.addEventListener('click', () =>{
    resetActiveBtn();
    showFoodMenu(btn.id);
    btn.classList.add('active-btn');
  });
});

function resetActiveBtn(){
  menuBtns.forEach((btn) =>{
    btn.classList.remove('active-btn');
  });
}

function showFoodMenu(newMenuBtn){
  activeBtn = newMenuBtn;
  foodItems.forEach((item) =>{
    if(item.classList.contains(activeBtn)){
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

menu.onclick = () =>{
    menu.classList.toggle('.home_slider');
    navbar.classList.toggle('active')
}
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });
