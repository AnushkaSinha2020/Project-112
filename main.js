var a1= "footwear";
var m1= "running shoe";
var a2= "stationary";
var m2= "book";
var a3= "snack";
var m3= "packet";
var a4= "tableware";
var m4= "spoon";
var a5= "Bottle";
var m5= "water bottle";
var a6= "cell phone";
var m6= "mobile phone";
var a7= "earphone";
var m7= "spotlight";

var microsoft_azure = "Microsoft Azure answered 2 images accurately";
var mobilenet_model= "MobileNet Model answered 5 images accurately";
var result= "Therefore, MobileNet Model is more accurate than Microsoft Azure.";

function visible1(){
    document.getElementById("d1s1").innerHTML = a1;
    document.getElementById("d1s2").innerHTML = m1;
}
function visible2(){
    document.getElementById("d2s1").innerHTML = a2;
    document.getElementById("d2s2").innerHTML = m2;
}
function visible3(){
    document.getElementById("d3s1").innerHTML = a7;
    document.getElementById("d3s2").innerHTML = m7;
}
function visible4(){
    document.getElementById("d4s1").innerHTML = a3;
    document.getElementById("d4s2").innerHTML = m3;
}
function visible5(){
    document.getElementById("d5s1").innerHTML = a4;
    document.getElementById("d5s2").innerHTML = m4;
}
function visible6(){
    document.getElementById("d6s1").innerHTML = a5;
    document.getElementById("d6s2").innerHTML = m5;
}
function visible7(){
    document.getElementById("d7s1").innerHTML = a6;
    document.getElementById("d7s2").innerHTML = m6;
}

function view_accuracy(){
    document.getElementById("a_ma").innerHTML = microsoft_azure;
    document.getElementById("a_mm").innerHTML = mobilenet_model;
    document.getElementById("h4_result").innerHTML= result;
}