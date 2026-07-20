const produtos = [

{
nome:"Capinha para Celular",
categoria:"Capinhas",
imagem:"img/capinha.jpg",
preco:20
},

{
nome:"Película 3D",
categoria:"Películas",
imagem:"img/pelicula.jpg",
preco:20
},

{
nome:"Kit Carregador",
categoria:"Carregadores",
imagem:"img/carregador.jpg",
preco:40
},

{
nome:"Cabo USB",
categoria:"Cabos",
imagem:"img/cabo-usb.jpg",
preco:20
},

{
nome:"Fone de Ouvido com fios ",
categoria:"Fones",
imagem:"img/fone.jpg",
preco:25
},

{
nome:"Impressão",
categoria:"Gráfica",
imagem:"img/impressora.jpg",
preco:2
},

{
nome:"Scanner",
categoria:"Gráfica",
imagem:"img/scanner.jpg",
preco:2
},

{
nome:"Plastificação",
categoria:"Gráfica",
imagem:"img/plastificadora.jpg",
preco:7
},

{
nome:"Encadernação",
categoria:"Gráfica",
imagem:"img/encadernadora.jpg",
preco:10
}

];


const lista = document.getElementById("listaProdutos");



function mostrarProdutos(listaProdutos){

lista.innerHTML="";


listaProdutos.forEach((produto,index)=>{


lista.innerHTML += `

<div class="produto">

<img src="${produto.imagem}" alt="${produto.nome}">


<h2>${produto.nome}</h2>


<p>${produto.categoria}</p>


<h3>
R$ ${produto.preco.toFixed(2).replace(".",",")}
</h3>


<button onclick="adicionarCarrinho(${index})">

<i class="fa-solid fa-cart-plus"></i>

Adicionar

</button>


</div>

`;

});


}



mostrarProdutos(produtos);




// PESQUISA

const buscar = document.getElementById("buscar");


buscar.addEventListener("keyup",()=>{


let texto = buscar.value.toLowerCase();


let resultado = produtos.filter(produto=>

produto.nome.toLowerCase().includes(texto)

);


mostrarProdutos(resultado);


});




// CATEGORIAS

const botoes = document.querySelectorAll(".categorias button");


botoes.forEach(botao=>{


botao.addEventListener("click",()=>{


let categoria = botao.dataset.categoria;


if(categoria=="Todos"){

mostrarProdutos(produtos);

}

else{


let filtrados = produtos.filter(produto=>

produto.categoria==categoria

);


mostrarProdutos(filtrados);


}


});


});
