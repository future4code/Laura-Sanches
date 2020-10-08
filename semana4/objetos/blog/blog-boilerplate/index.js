function clicar () {

let valorTitulo = document.getElementById ("titulo-post");
let valorAutor = document.getElementById("autor-post");
let valorConteudo = document.getElementById("conteudo-post");
let lugarImprimir = document.getElementById("container-de-posts")

lugarImprimir.innerHTML += `<div> <br>${valorTitulo.value} <br> ${valorAutor.value} <br> ${valorConteudo.value}</div>`

let informacoes={

    titulo: valorTitulo,
    autor: valorAutor,
    conteudo: valorConteudo

}

valorTitulo.value = "";
valorAutor.value = "";
valorConteudo.value = "";

let armazenaArray = [informacoes]

}