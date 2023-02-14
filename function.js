function stringToNum (string){
    const stringToNumber = document.getElementById(string);
    const number = parseFloat(stringToNumber.value);
    stringToNumber.value = '';
    return number;
}

function stringToInner (string){
    const stringToNumber = document.getElementById(string);
    const number = parseFloat(stringToNumber.innerText);
    return number;
}


function choclate(choc){
    const total = choc * 200;
    return total;
}
function rose(choc){
    const total = choc * 120;
    return total;
}
function diary(choc){
    const total = choc * 340;
    return total;
}



function sett(num, valu){
    const setNum = document.getElementById(num);
    setNum.innerText = valu;
}