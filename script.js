// Pegando do HTML as capas do mangas dos cards

let capaJujutsuKaisen = document.querySelector(".capa-jujutsukaisen")
let capaDemonSlayer = document.querySelector(".capa-demonslayer")
let capaBlackClover = document.querySelector(".capa-blackclover")

// Pegando do HTML os paragrafos onde está escrito qual
// volume está selecionado

let pJujutsuKaisen = document.querySelector(".p-vol-jujutsukaisen")
let pDemonSlayer = document.querySelector(".p-vol-demonslayer")
let pBlackClover = document.querySelector(".p-vol-blackclover")

// Pegando do HTML os icons que vão selecionar qual vol

// Jujutsu Kainse - JJK

let iconVol1JJK = document.querySelector(".vol1jujutsu")
let iconVol2JJK = document.querySelector(".vol2jujutsu")
let iconVol3JJK = document.querySelector(".vol3jujutsu")

// Demon Slayer - DMS

let iconVol1DMS = document.querySelector(".vol1demon")
let iconVol2DMS = document.querySelector(".vol2demon")
let iconVol3DMS = document.querySelector(".vol3demon")

// Black Clover - BKC

let iconVol1BKC = document.querySelector(".vol1black")
let iconVol2BKC = document.querySelector(".vol2black")
let iconVol24BKC = document.querySelector(".vol24black")


// Jujutsu Kaisen -> Funções para mudança de capa, paragrafo e fundo do paragrafo


iconVol1JJK.addEventListener('click', function () {
    capaJujutsuKaisen.src = "assets/jujutsu kaisen/jujutsukaisen-vol1.jpg"
    pJujutsuKaisen.textContent = "Selecionado: Volume 1"
    pJujutsuKaisen.style.background = "#E76F51"
})

iconVol2JJK.addEventListener('click', function () {
    capaJujutsuKaisen.src = "assets/jujutsu kaisen/jujutsukaisen-vol2.jpg"
    pJujutsuKaisen.textContent = "Selecionado: Volume 2"
    pJujutsuKaisen.style.background = "#E76F51"
})

iconVol3JJK.addEventListener('click', function () {
    capaJujutsuKaisen.src = "assets/jujutsu kaisen/jujutsukaisen-vol3.jpg"
    pJujutsuKaisen.textContent = "Selecionado: Volume 3"
    pJujutsuKaisen.style.background = "#E76F51"
})


// DEMON SLAYER -> Funções para mudança de capa, paragrafo e fundo do paragrafo


iconVol1DMS.addEventListener('click', function () {
    capaDemonSlayer.src = "assets/demon slayer/demonslayer-vol1.jpg"
    pDemonSlayer.textContent = "Selecionado: Volume 1"
    pDemonSlayer.style.background = "#2A9D8F"
})

iconVol2DMS.addEventListener('click', function () {
    capaDemonSlayer.src = "assets/demon slayer/demonslayer-vol2.jpg"
    pDemonSlayer.textContent = "Selecionado: Volume 2"
    pDemonSlayer.style.background = "#2A9D8F"
})

iconVol3DMS.addEventListener('click', function () {
    capaDemonSlayer.src = "assets/demon slayer/demonslayer-vol3.jpg"
    pDemonSlayer.textContent = "Selecionado: Volume 3"
    pDemonSlayer.style.background = "#2A9D8F"
})


// Black Clover -> Funções para mudança de capa, paragrafo e fundo do paragrafo


iconVol1BKC.addEventListener('click', function () {
    capaBlackClover.src = "assets/black clover/blackclover-vol1.jpg"
    pBlackClover.textContent = "Selecionado: Volume 1"
    pBlackClover.style.background = "#E9C46A"
})

iconVol2BKC.addEventListener('click', function () {
    capaBlackClover.src = "assets/black clover/blackclover-vol2.jpg"
    pBlackClover.textContent = "Selecionado: Volume 2"
    pBlackClover.style.background = "#E9C46A"
})

iconVol24BKC.addEventListener('click', function () {
    capaBlackClover.src = "assets/black clover/blackclover-vol24.jpg"
    pBlackClover.textContent = "Selecionado: Volume 24"
    pBlackClover.style.background = "#E9C46A"
})