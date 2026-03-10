const exchangeRate = 250;
const fixedCommission = 250;
const percentageRate = 10;

function calculateFinal(){

const usd = parseFloat(document.getElementById("usdPrice").value);

const result = document.getElementById("result");

if(isNaN(usd)){

result.innerHTML = "أدخل السعر بالدولار";

return;

}

const priceDZD = usd * exchangeRate;

let total;

if(usd < 10){

total = priceDZD + fixedCommission;

}else{

total = priceDZD * (1 + percentageRate / 100);

}

result.innerHTML = "السعر النهائي: " + total.toLocaleString() + " دج";

}