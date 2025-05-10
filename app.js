let meun = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
meun.onclick = () =>{
    meun.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}