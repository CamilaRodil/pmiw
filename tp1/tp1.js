//Camila Rodil 95530/1
//https://youtu.be/GEeq4UFhf6c

let imagen;
let x = 600;
let xInicial = x;
let y = 200;
let tam = 240;
let cant = 7;
let velX = 1;
let animacion = false;

function preload() {
  imagen = loadImage("data/imgCirc.jpg");
}

function setup() {
  createCanvas(800, 400);
}

function draw() { 
  fondo(); 
  if (animacion) {
    x += velX;
    if (x >= width - tam / 2 || x <= 640 - tam / 2) {
      velX *= -1;
    }
  }
  dibujaCirculos(x, y, tam, cant);
  image(imagen, 0, 0, 400, 400);
}

function mousePressed() {  
  if (calcularDistancia()) {
    animacion = true;
    x = xInicial;
    velX = 1;
  }
}

function mouseReleased() {
  animacion = false;
}

function calcularDistancia() {
  return dist(mouseX, mouseY, x, y) <= tam / 2;
}

function dibujaCirculos(x, y, tam, cant) { 
  push();
  translate(x, y);
  for (let i = 0; i < cant; i++) {
    rotate(sin(frameCount * 0.1) * 0.15);
    fill(i % 2 * 255);
    noStroke();
    let lado = map(i, 0, cant - 1, tam, 0);
    ellipse(0, 0, lado, lado);
  }
  pop();
}

function fondo() {
  noStroke();
  let cantX = 20;
  let cantY = 20;
  let modX = 400 / cantX;
  let modY = 400 / cantY;
  
  for (let j = 0; j < cantY; j++) {
    for (let i = 0; i < cantX; i++) {
      if (j % 2 == 0) {
        fill(0);
      } else {
        fill(255);
      }
      rect(400 + i * modX, j * modY, 20, 20);

      if (i % 2 == 0) {
        fill(0);
      } else {
        fill(255);
      }
      rect(600 + i * modX, 380 - j * modY, 20, 20);
    }
  }  
  let j = 1;
  let cant2X = 20;
  let mod2X = 400 / cant2X;
  for (let i_ = 0; i_ < cant2X; i_++) {
    if (i_ % 2 == 0) {
      fill(0);
    } else {
      fill(255);
    }
    rect(199 + i_ * mod2X, 220 - j * modY, 20, 280);
  }
}
