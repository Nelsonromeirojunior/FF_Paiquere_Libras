"use strict";
const galeria = document.querySelector(".galeria");
const button = document.querySelector(".button");
const buttonVoltar = document.querySelector(".button-voltar");

var arrayImg = ["./Imagens/FF Libras Imagem/Imagem.jpg", "./Imagens/FF Libras Imagem/Imagem 02.jpg",
    "./Imagens/FF Libras Imagem/Imagem 03.jpg", "./Imagens/FF Libras Imagem/Imagem 04.jpg",
    "./Imagens/FF Libras Imagem/Imagem 05.jpg", "./Imagens/FF Libras Imagem/Imagem 06.jpg",
    "./Imagens/FF Libras Imagem/Imagem 07.jpg", "./Imagens/FF Libras Imagem/Imagem 08.jpg",
    "./Imagens/FF Libras Imagem/Imagem 09.jpg", "./Imagens/FF Libras Imagem/Imagem 10.jpg",
    "./Imagens/FF Libras Imagem/Imagem 11.jpg", "./Imagens/FF Libras Imagem/Imagem 12.jpg", "./Imagens/FF Libras Imagem/Imagem 13.jpg", "./Imagens/FF Libras Imagem/Imagem 14.jpg"];
galeria.style.gridTemplateColumns = `repeat(${arrayImg.length}, 1fr)`;

const agregarFotos = (img) => {
    for (let i = 0; i < img.length; i++) {
        let newImg = `<img class="foto" src="${arrayImg[i]}" alt="Descrição da imagem ${i + 1}">`;
        galeria.innerHTML += newImg;
    }
}
agregarFotos(arrayImg);

const filhosElementos = galeria.children;
var contador = 0;
button.addEventListener("click", () => {
    filhosElementos[contador].classList.add("seguinte");
    filhosElementos[contador].classList.remove("voltar");
    contador++;

    buttonVoltar.style.display = `inline-block`;

    if (contador >= arrayImg.length - 1) {
        button.style.display = `none`;
    }
});

buttonVoltar.addEventListener("click", () => {
    if (contador <= arrayImg.length && contador >= 0) {
        contador--;
        button.style.display = `inline-block`;

        filhosElementos[contador].classList.add("voltar");
        filhosElementos[contador].classList.remove("seguinte");

        if (contador == 0) {
            buttonVoltar.style.display = `none`;
        }
    }
})