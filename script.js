let rate = 250; // سعر الدولار
let commissionPercent = 0.10; // 10%
let shippingPerKg = 10;

function calculateFinal(){

let usd = document.getElementById("usdPrice").value;
let weight = document.getElementById("weight").value;

if(!usd){

document.getElementById("result").innerHTML =
"أدخل السعر";

return;

}

let productDZD = usd * rate;

let shipping = (weight || 0) * shippingPerKg * rate;

let commissionValue;

// اذا كان السعر أقل من 10$
if(usd < 10){

commissionValue = 250;

}else{

commissionValue = productDZD * commissionPercent;

}

let final =
productDZD + shipping + commissionValue;

document.getElementById("result").innerHTML =
final.toFixed(0) + " دج";

document.getElementById("details").innerHTML =
`
سعر المنتج: ${productDZD.toFixed(0)} دج <br>
الشحن: ${shipping.toFixed(0)} دج
`;

}

function copyPrice(){

let text = document.getElementById("result").innerText;

navigator.clipboard.writeText(text);

alert("تم نسخ السعر");

}

function resetCalc(){

document.getElementById("usdPrice").value="";
document.getElementById("weight").value="";
document.getElementById("result").innerHTML="أدخل المعلومات";
document.getElementById("details").innerHTML="";

}
