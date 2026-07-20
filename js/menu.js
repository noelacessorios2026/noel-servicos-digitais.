// ===============================
// menu.js
// NOEL SERVIÇOS DIGITAIS
// ===============================


document.addEventListener("DOMContentLoaded",()=>{


const botaoMenu =
document.getElementById("btnMenu");


const menu =
document.getElementById("menu");


const overlay =
document.getElementById("overlay");





// ABRIR E FECHAR MENU

if(botaoMenu && menu){


botaoMenu.addEventListener("click",()=>{


menu.classList.toggle("ativo");


if(overlay){

overlay.classList.toggle("ativo");

}


});


}






// FECHAR NO OVERLAY

if(overlay){


overlay.addEventListener("click",()=>{


menu.classList.remove("ativo");


overlay.classList.remove("ativo");


});


}







// FECHAR AO CLICAR NOS LINKS

const links =
document.querySelectorAll("#menu a");



links.forEach(link=>{


link.addEventListener("click",()=>{


if(menu){

menu.classList.remove("ativo");

}



if(overlay){

overlay.classList.remove("ativo");

}



});


});







// MARCAR PÁGINA ATUAL


const paginaAtual =
window.location.pathname
.split("/")
.pop();




links.forEach(link=>{


const href =
link.getAttribute("href");



if(href === paginaAtual){


link.classList.add("ativo");


}



});






});s