const prompt = require("prompt-sync")();
let p1 = prompt ("Você conhece a vítima? ");
let p2 = prompt ("Você já teve alguma desavença com ele/ela? ");
let p3 = prompt ("Você se encontrou com a vítima nas ultimas 24h? ");
let p4 = prompt ("Nesse encontro teve alguma briga? ");
let p5 = prompt ("Você estava com alguma arma? ");

if (p1 == "sim"){p1=1}
else {p1=0}
if (p2 == "sim"){p2=1}
else {p2=0}
if (p3 == "sim"){p3=1}
else {p3=0}
if (p4 == "sim"){p4=1}
else {p4=0}
if (p5 == "sim"){p5=1}
else {p5=0}

if (p1+p2+p3+p4+p5>=4){console.log("Você é o culpado")}
else if(p1+p2+p3+p4+p5==3) {console.log ("Você é suspeito")}
else if(p1+p2+p3+p4+p5<=2) {console.log ("Você é inocente")}