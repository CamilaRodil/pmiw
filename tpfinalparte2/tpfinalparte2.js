//https://youtu.be/cfe87pBQwzI  (el audio anda mal al principio pero se arregla enseguida)
//aclaración: no apretar Ctrl + T en la clase Juego  (se descoloca el puntaje)

let imgFondos=[];

function preload() {
  sonido = loadSound('data/EncontrarConejo.mp3');
  imgConejo = loadImage("data/conejo.png");
  imgInicio = loadImage("data/imgInicio1.jpg");
  imgCreditos = loadImage("data/imgCreditos.jpg");
  imgInstrucciones = loadImage("data/imgInstrucciones.jpg");
  imgGanaste = loadImage("data/imgGanaste.jpg");
  imgPerdiste= loadImage("data/imgPerdiste.jpg");
  for (let i = 0; i < 11; i++) {
    imgFondos [i] = loadImage("data/fondo"+i+".jpg")
  }
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego();
  sonidoControl = new Sonido(sonido);
}

function draw() {
  background(220);
  objJuego.dibujarPantalla();
}

function mousePressed() {
  objJuego.iniciar();
}

function keyPressed() {
  sonidoControl.comienza();
}
