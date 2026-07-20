let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


const contador = document.getElementById("contadorCarrinho");
const listaCarrinho = document.getElementById("listaCarrinho");
const totalElemento = document.getElementById("total");



// ADICIONAR PRODUTO

function adicionarCarrinho(index){

    carrinho.push(produtos[index]);

    atualizarCarrinho();

    alert("Produto adicionado ao carrinho!");

}



// ATUALIZAR

function atualizarCarrinho(){


    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );


    if(contador){

        contador.innerHTML = carrinho.length;

    }


    mostrarCarrinho();

}



// MOSTRAR CARRINHO

function mostrarCarrinho(){


    if(!listaCarrinho) return;


    listaCarrinho.innerHTML="";


    let total = 0;


    carrinho.forEach((item,index)=>{


        total += item.preco;


        listaCarrinho.innerHTML += `

        <div class="item-carrinho">

        <p>
        ${item.nome}
        - R$ ${item.preco.toFixed(2).replace(".",",")}
        </p>


        <button onclick="removerItem(${index})">

        ❌

        </button>

        </div>

        `;


    });



    if(totalElemento){

        totalElemento.innerHTML =
        total.toFixed(2).replace(".",",");

    }


}




// REMOVER

function removerItem(index){

    carrinho.splice(index,1);

    atualizarCarrinho();

}




// FINALIZAR WHATSAPP


function finalizarWhatsApp(){


    if(carrinho.length==0){

        alert("Carrinho vazio!");

        return;

    }



    let mensagem =
    "Olá, NOEL Serviços Digitais!%0A%0A"+
    "Meu pedido:%0A%0A";



    let total=0;



    carrinho.forEach(item=>{


        mensagem +=
        "✅ "+item.nome+
        " - R$ "+
        item.preco.toFixed(2).replace(".",",")+
        "%0A";


        total += item.preco;


    });



    mensagem +=
    "%0ATotal: R$ "+
    total.toFixed(2).replace(".",",");



    window.open(
    "https://wa.me/5563999138070?text="+mensagem,
    "_blank"
    );


}




atualizarCarrinho();