let title = document.querySelector("h1")
let card1 = document.querySelector('#card1')
let card2 = document.getElementById("card2")
let card4 = document.getElementById("card4")
let card5 = document.getElementById("card5")

const alertTitle = evt => {
    evt.preventDefault();
    alert("ALL PAYMENTS FINAL NO REFUNDS AND NO CUSTOMER SERVICE")
}

const price1 = evt => {
    evt.preventDefault()
    alert("that will be one million Nigerian Naira")
}

const price2 = evt => {
    evt.preventDefault()
    alert("that will be $100")
}


const price4 = evt => {
    alert("free if you send this to your HOA president (shipping not included)")
}

const price5 = evt => {
    alert("staraptor sucks")
}
title.addEventListener('mouseover', alertTitle);
card1.addEventListener('click', price1);
card2.addEventListener('click', price2);
card4.addEventListener("click", price4);
card5.addEventListener("click", price5)

