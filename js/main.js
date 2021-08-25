const iconHamburguer = document.querySelector(".logo-mobile");
const menu = document.querySelector(".menu");

addEventListeners();
function addEventListeners(){
    iconHamburguer.addEventListener('click', function(){
        if(menu.classList.contains('active')){
            menu.classList.remove('active');
        }else{
            menu.classList.add('active');
        }
    })
}
