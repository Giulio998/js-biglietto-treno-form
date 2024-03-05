function myFunction() {
    let km = document.getElementById('km').value;
    let discount = document.getElementById('discount').value;
    
    const basePrice = (km * 0.21);
    let finalPrice;
    let minorPrice = basePrice - (basePrice * 0.2);
    const minorDiscount = "20%";
    const seniorDiscount = "40%";

    let seniorPrice = basePrice - (basePrice * 0.4);




    console.log("km ", km);
    console.log("basePrice ", basePrice);
    console.log("discount ", discount);


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



}

    


document.getElementById('submit').addEventListener("click", myFunction);

    
