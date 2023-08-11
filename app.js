'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')

function mudarCor(){
    forma1.classList.toggle('changeColor')
}
function mudarForma(){
    forma2.classList.toggle('changeShape')
}
function desvaenecer(){
    forma3.classList.toggle('fadeOut')
}
function crescer(){
    forma4.classList.toggle('grow')
}
function diminuir(){
    forma5.classList.toggle('shrink')
}
function girar(){
    forma6.classList.toggle('spin')
}
function mudarPlanoFundo(){
    forma7.classList.toggle('mudarPlanoFundo')
}
function brilhar(){
    forma8.classList.toggle('brilhar')
}

forma1.addEventListener('click',mudarCor)
forma2.addEventListener('click',mudarForma)
forma3.addEventListener('click',desvaenecer)
forma4.addEventListener('click',crescer)
forma5.addEventListener('click',diminuir)
forma6.addEventListener('click',girar)
forma7.addEventListener('click',mudarPlanoFundo)
forma8.addEventListener('click',brilhar)