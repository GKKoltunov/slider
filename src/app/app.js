const left = document.getElementById('left');
const right = document.getElementById('right');
const reklama = document.getElementById('reklama');
const card = document.getElementsByClassName('card');
const container = document.getElementById('container');
const info = document.getElementsByClassName('info');
const tooltip = document.getElementsByClassName('tooltip');
const closeBtn = document.getElementsByClassName("closeInfo");

const screenWidth = window.innerWidth;//ширина экрана
const containerWidth = +window.getComputedStyle(container).width.slice(0,-2)// ширина контейнера для карточек
const cardWidth = +window.getComputedStyle(card[0]).width.slice(0,3)//ширина карточки
let cardQuantity = Math.floor(containerWidth/cardWidth) //целое кол-во карточек которое помещается на экране

let clickQuantity = card.length - cardQuantity//кол-во кликов максимальное чтобы посмотреть последний слайд
let maxTransX//максимальная величина смещения 

let transX = 0;//величина смещения


if(reklama.offsetWidth > screenWidth){
    right.style.display ="block";
    left.style.display ="block";
}

 
if(cardQuantity===7){
     maxTransX=Math.floor(containerWidth/cardQuantity)
}else{
    maxTransX=Math.floor(clickQuantity*cardWidth)
}
  

let clkickCounter=clickQuantity

function rightClick(){
    if(transX===0 ||  transX>-maxTransX || clkickCounter>0)
   { reklama.style.transform=`translateX(${transX-=cardWidth}px)`;
    clkickCounter-=1
}}

function leftclick(){
    if(transX<0)
      { reklama.style.transform=`translateX(${transX+=cardWidth}px)`;
}}

function showInfo(i){
    tooltip[i].style.display="flex";
}

function closeInfo(i){
    tooltip[i].style.display ="none"
}


right.addEventListener('click', rightClick);
left.addEventListener('click', leftclick);

info[0].addEventListener('click',  ()=>{showInfo(0)});
info[1].addEventListener('click',  ()=>{showInfo(1)});
info[2].addEventListener('click',  ()=>{showInfo(2)});
info[3].addEventListener('click',  ()=>{showInfo(3)});
info[4].addEventListener('click',  ()=>{showInfo(4)});
info[5].addEventListener('click',  ()=>{showInfo(5)});
info[6].addEventListener('click',  ()=>{showInfo(6)});
info[7].addEventListener('click',  ()=>{showInfo(7)});

closeBtn[0].addEventListener('click', ()=>{closeInfo(0)})
closeBtn[1].addEventListener('click', ()=>{closeInfo(1)})
closeBtn[2].addEventListener('click', ()=>{closeInfo(2)})
closeBtn[3].addEventListener('click', ()=>{closeInfo(3)})
closeBtn[4].addEventListener('click', ()=>{closeInfo(4)})
closeBtn[5].addEventListener('click', ()=>{closeInfo(5)})
closeBtn[6].addEventListener('click', ()=>{closeInfo(6)})
closeBtn[7].addEventListener('click', ()=>{closeInfo(7)})