
export default function  initmenuMobile(){
  const menuMobile = document.querySelector('[data-menu="button"]');
  const menu = document.querySelector('[data-menu="list-menu"]');
  const eventos = ['click', 'touchstart']
  function openMenu(){
  menuMobile.classList.toggle('active')
  menu.classList.toggle('active') 

  
  }
  
 function evento(evento){
  menuMobile.addEventListener(evento, openMenu)
 }
  eventos.forEach(evento)
}

function Dom(selector){
  const element = document.querySelector(selector);
    element.classList.add('active')
 
}


const li = new Dom('li')


console.log(Dom('a'))


