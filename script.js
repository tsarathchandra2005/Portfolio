var typed=new Typed(".input",{
    strings:["I am","T.Sarath Chandra"," CSE NITK"],
    typeSpeed:130,
    backSpeed:80,
    loop:true
});

let menu=document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');
}