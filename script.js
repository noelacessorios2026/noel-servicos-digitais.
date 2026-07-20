// =====================================
// NOEL SERVIÇOS DIGITAIS
// SCRIPT.JS COMPLETO CORRIGIDO
// =====================================


// ================================
// CARRINHO
// ================================


let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


const listaCarrinho = document.getElementById("listaCarrinho");
const totalElemento = document.getElementById("total");
const contadorCarrinho = document.getElementById("contadorCarrinho");
const btnWhats = document.getElementById("btnWhats");




// SALVAR

function salvarCarrinho(){

localStorage.setItem(
"carrinho",
JSON.stringify(carrinho)
);

}




// ADICIONAR

function adicionarCarrinho(nome, preco){


let produto = carrinho.find(
item => item.nome === nome
);



if(produto){

produto.quantidade++;

}else{


carrinho.push({

nome:nome,

preco:Number(preco),

quantidade:1

});


}


salvarCarrinho();

atualizarCarrinho();


}





// AUMENTAR

function aumentar(index){

carrinho[index].quantidade++;

salvarCarrinho();

atualizarCarrinho();

}





// DIMINUIR

function diminuir(index){


if(carrinho[index].quantidade > 1){

carrinho[index].quantidade--;

}else{

carrinho.splice(index,1);

}


salvarCarrinho();

atualizarCarrinho();


}





// REMOVER

function remover(index){

carrinho.splice(index,1);

salvarCarrinho();

atualizarCarrinho();

}





// MOSTRAR CARRINHO


function atualizarCarrinho(){


if(!listaCarrinho) return;


listaCarrinho.innerHTML="";


let total = 0;

let quantidade = 0;



carrinho.forEach((produto,index)=>{


let subtotal =
produto.preco *
produto.quantidade;



total += subtotal;

quantidade += produto.quantidade;



listaCarrinho.innerHTML += `

<div class="itemCarrinho">


<h3>${produto.nome}</h3>


<p>
R$ ${produto.preco.toFixed(2)}
</p>


<button onclick="diminuir(${index})">
-
</button>


<strong>
${produto.quantidade}
</strong>


<button onclick="aumentar(${index})">
+
</button>


<button onclick="remover(${index})">
Excluir
</button>


</div>

`;

});



if(totalElemento){

totalElemento.innerHTML =
total.toFixed(2).replace(".",",");

}



if(contadorCarrinho){

contadorCarrinho.innerHTML =
quantidade;

}


}





// ================================
// FINALIZAR WHATSAPP
// ================================


if(btnWhats){


btnWhats.onclick=function(){



if(carrinho.length===0){

alert("Carrinho vazio!");

return;

}



let telefone =
"5563999138070";



let texto =
"Olá NOEL Serviços Digitais! Quero fazer um pedido:%0A%0A";



let total=0;



carrinho.forEach(item=>{


let subtotal =
item.preco *
item.quantidade;



total += subtotal;



texto +=
"Produto: "+item.nome+
"%0AQuantidade: "+
item.quantidade+
"%0ASubtotal: R$ "+
subtotal.toFixed(2)+
"%0A%0A";


});



texto +=
"Total: R$ "+
total.toFixed(2);



window.open(

"https://wa.me/"+telefone+
"?text="+texto,

"_blank"

);



}


}






// ================================
// PESQUISA
// ================================


const pesquisa =
document.getElementById("buscar");



if(pesquisa){


pesquisa.addEventListener("keyup",function(){


let valor =
this.value.toLowerCase();



document.querySelectorAll(".produto")
.forEach(produto=>{


let nome =
produto
.querySelector("h3")
.innerText
.toLowerCase();



if(nome.includes(valor)){

produto.style.display="block";

}else{

produto.style.display="none";

}


});


});


}






// ================================
// CATEGORIAS
// ================================


document
.querySelectorAll(".categoria button")
.forEach(botao=>{


botao.onclick=function(){


let categoria =
this.dataset.categoria;



document
.querySelectorAll(".produto")
.forEach(produto=>{



if(
categoria==="Todos" ||
produto.dataset.categoria===categoria
){


produto.style.display="block";


}else{


produto.style.display="none";


}


});



}



});






// INICIAR


atualizarCarrinho();