//variáveis
var img=""
var objetos=[]
var estado=""


function preload() {
img=loadImage("animais.webp")

}

function setup() {
canvas=createCanvas(600,400)
objectDetector=ml5.objectDetector("cocossd",modeloCarregado)


  document.getElementById("status").innerHTML = "Detectando objetos"
}
function modeloCarregado() {
console.log("cocossd carregado com sucesso")
estado=true  
objectDetector.detect(img,mostrarResultado)
}
function mostrarResultado(error, results) {
  if (error) {
    console.log(error)
  }
  console.log(results)
  objetos=results
}

function draw() {
  background(0)
image(img,0,0,640,420) 
  if (estado == true) {
    for (i = 0; i < objetos.length; i++) {
      
      document.getElementById("status").innerHTML = "Objetos detectados"
      fill("aquamarine");
      percent = floor(objetos[i].confidence * 100);
      text(objetos[i].label+percent+"%",objetos[i].x+15,objetos[i].y+15)
    }
  }
}