function printTicket() {
    let km = document.getElementById('km').value;
    let discount = document.getElementById('discount').value;
    let name = document.getElementById('identity').value;
  
    const basePrice = (km * 0.21);
    let finalPrice;
    const smallDiscount = 0.2;
    const bigDiscount = 0.4;
    let minorPrice = basePrice - (basePrice * smallDiscount);
    let seniorPrice = basePrice - (basePrice * bigDiscount);
    const minorDiscount = ((smallDiscount * 100) + '%');
    const seniorDiscount = ((bigDiscount * 100) + '%');


    console.log("km ", km);
    console.log("basePrice ", basePrice);
    console.log("discount ", discount);


if (km > 0 && name != "" ) {
    if (discount == "minorenne") {
        finalPrice = minorPrice.toFixed(2);
        console.log("minorDiscount ", minorDiscount);
        console.log("minorPrice ", finalPrice);
    } else if (discount == "over 65") {
        finalPrice = seniorPrice.toFixed(2);
        console.log("seniorDiscount ", seniorDiscount);
        console.log("seniorPrice ", finalPrice);
    } else {
        finalPrice = basePrice.toFixed(2);
        console.log("basePrice ", finalPrice);
    } 

    let prezzoContainer = document.getElementById("prezzo");
    prezzoContainer.innerHTML = finalPrice + " "+ "€";
    
    let nameContainer = document.getElementById("nomePasseggero");
    nameContainer.innerHTML= name;
    
    let discountContainer = document.getElementById("sconto");
    discountContainer.innerHTML = discount;
    
    let carrozzaContainer = document.getElementById("carrozza");
    carrozzaContainer.innerHTML = Math.floor(Math.random() * 10) + 1;
    
    let cpContainer = document.getElementById("cp");
    cpContainer.innerHTML = Math.floor(Math.random() * 100000) + 1;

} else {
    alert("Inserisci i campi obbligatori")   
}

}

function resetTicket() {
    console.log("partito");
    document.getElementById('km').value = 0;
    document.getElementById('discount').value = "Nessuno"
    document.getElementById('identity').value = "";


    document.getElementById("prezzo").innerHTML = "";
    document.getElementById("nomePasseggero").innerHTML= "";
    document.getElementById("sconto").innerHTML = "";
    document.getElementById("carrozza").innerHTML = "";
    document.getElementById("cp").innerHTML = "";

    
}

    


document.getElementById('submit').addEventListener("click", printTicket);

    
document.getElementById('reset').addEventListener("click", resetTicket);