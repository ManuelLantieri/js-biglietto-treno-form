// function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// DOM elements
const PRICE_KM = 0.21;
const createTicketFormElm =document.getElementById("create-ticket-form");
const fullNameFieldElm = document.getElementById("full-name");
const kmFieldElm = document.getElementById("km");
const ageFieldElm = document.getElementById("age");
const btnCreateElm = document.getElementById("btn-create");
const btnResetElm = document.getElementById("btn-reset");
const ticketElm = document.getElementById ("ticket");
const ticketNameElm = document.getElementById("passenger-name")
const ticketOffertElm = document.getElementById("ticket-offert")
const ticketTrainCarElm = document.getElementById("ticket-train-car")
const ticketCpCodeElm= document.getElementById("ticket-cp-code")
const ticketPriceElm = document.getElementById("ticket-price")

// dom events
createTicketFormElm.addEventListener("submit", function(e) {
    // interrompe l'esecuzione del form
    e.preventDefault()

    const km = Number(kmFieldElm.value);
    const age = ageFieldElm.value;
    let ticketPrice = km * PRICE_KM;
    let ticketOffert = "Biglietto Standard";


    if (age === 'under') {
        ticketPrice *= 0.8;
        ticketOffert = "Tariffa young";
    } else if (age === 'over') {
        ticketPrice *= 0.6;
        ticketOffert = "Tariffa senior";
    } 

ticketPrice = Number(ticketPrice.toFixed(2));

// price
ticketNameElm.innerHTML = fullNameFieldElm.value;
ticketOffertElm.innerHTML = ticketOffert;
ticketTrainCarElm.innerHTML = getRndInteger(1,20);
ticketCpCodeElm.innerHTML = getRndInteger(90000, 99999);
ticketPriceElm.innerHTML = ticketPrice + '€';

ticketElm.classList.remove('d-none')

});

btnResetElm.addEventListener("click", function() {
    ticketElm.classList.add('d-none')
});
