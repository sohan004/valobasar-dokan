document.getElementById('kitkat-btn').addEventListener('click', function () {
    const kitkatInput = stringToNum('kitkat-input')
    if (kitkatInput > 0) {
        const add = stringToInner('add-1')
        const addCart = add + kitkatInput;
        sett('add-1', addCart)
        const kitkatPrice = choclate(kitkatInput);
        const kitkat = stringToInner('kitkat')
        const kitkatTotal = kitkat + kitkatPrice
        sett('kitkat', kitkatTotal)
        const total = stringToInner('total')
        const totalPrice = total + kitkatPrice;
        sett('total', totalPrice);
        sett('total-cost', totalPrice);
        const total2 = stringToInner('total')
        


    }
})

document.getElementById('rose-btn').addEventListener('click', function () {
    const kitkatInput = stringToNum('rose-input')
    if (kitkatInput > 0) {
        const add = stringToInner('add-2')
        const addCart = add + kitkatInput;
        sett('add-2', addCart)
        const kitkatPrice = rose(kitkatInput);
        const kitkat = stringToInner('rose')
        const kitkatTotal = kitkat + kitkatPrice
        sett('rose', kitkatTotal)
        const total = stringToInner('total')
        const totalPrice = total + kitkatPrice;
        sett('total', totalPrice);
        sett('total-cost', totalPrice);


    }
})
document.getElementById('book-btn').addEventListener('click', function () {
    const kitkatInput = stringToNum('book-input')
    if (kitkatInput > 0) {
        const add = stringToInner('add-3')
        const addCart = add + kitkatInput;
        sett('add-3', addCart)
        const kitkatPrice = diary(kitkatInput);
        const kitkat = stringToInner('book')
        const kitkatTotal = kitkat + kitkatPrice
        sett('book', kitkatTotal)
        const total = stringToInner('total')
        const totalPrice = total + kitkatPrice;
        sett('total', totalPrice);
        sett('total-cost', totalPrice);


    }
})
document.getElementById('promo-btn').addEventListener('click', function(){
    const  promo = stringToNum('promo')
    const total = stringToInner('total')
    const totalCost = stringToInner('total-cost')
    if(promo === 101 && total === totalCost){
        const dis = (totalCost * 10) / 100;
        const discount = totalCost - dis
        sett('total-cost', discount);

    }
    else{
        alert('promo code not available')
    }
})