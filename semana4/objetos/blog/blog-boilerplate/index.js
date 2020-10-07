function clicar () {

let valorTitulo = document.getElementById ("titulo-post");
let valorAutor = document.getElementById("autor-post");
let valorConteudo = document.getElementById("conteudo-post");
let lugarImprimir = document.getElementById("container-de-posts")

lugarImprimir.innerHTML += `${valorTitulo.value} <br> ${valorAutor.value} <br> ${valorConteudo.value}`

valorTitulo.value = "";
valorAutor.value = "";
valorConteudo.value = "";

let informacoes={

    titulo: valorTitulo,
    autor: valorAutor,
    conteudo: valorConteudo

}

let armazenaArray = [informacoes]

}