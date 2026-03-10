<script>

let rate = 250;

function calculateFinal(){

let usd = document.getElementById("usdPrice").value;

if(!usd){
document.getElementById("result").innerHTML="أدخل السعر بالدولار";
return;
}

let dzd = usd * rate;

let commission;

// أقل من 10$
if(usd < 10){

commission = 250;

}

// من 10 إلى 40
else if(usd <= 40){

commission = dzd * 0.10;

}

// أكثر من 40
else{

commission = dzd * 0.08;

}

let final = dzd + commission;

document.getElementById("result").innerHTML =
final.toFixed(0) + " دج";

document.getElementById("details").innerHTML =
`
السعر بالدينار: ${dzd.toFixed(0)} دج
`;

}

function copyPrice(){
let text = document.getElementById("result").innerText;
navigator.clipboard.writeText(text);
alert("تم نسخ السعر");
}

function resetCalc(){
document.getElementById("usdPrice").value="";
document.getElementById("result").innerHTML="أدخل السعر بالدولار";
document.getElementById("details").innerHTML="";
}

if ("serviceWorker" in navigator) {
navigator.serviceWorker.register("service-worker.js");
}

</script>
