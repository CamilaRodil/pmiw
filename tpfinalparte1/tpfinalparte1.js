//https://youtu.be/pTu19ZoR3is
//Perdón profe, quedo re largo el video, si lo pone en x1.75 se entiende igualmente. Saludos

let pantallas = new Array(22);
let img = [];
let textoAli;
let numeroactual = 0;
let sonido;

function preload() {
  texto = loadStrings('data/textoAli.txt');
  sonido = loadSound('data/AudioAli.mp3');
  for (let i = 0; i < pantallas.length; i++) {
    img[i] = loadImage("data/img" + i + ".jpg");
  }
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (numeroactual < pantallas.length) {
    planillabase(numeroactual);
  }
  if (numeroactual === pantallas.length + 1) {
    numeroactual = 0;
  }
  
  // Dibujo de botones A y B segun la pantalla actual
  if (numeroactual === 5 || numeroactual === 7 || numeroactual === 9 || numeroactual === 11) {
    fill(255);
    rect(75, 350, 150, 50);   // Boton A
    rect(400, 350, 150, 50);  // Boton B

    fill(0);
    textSize(15);
    if (numeroactual === 5) {
      text("Buscar al conejo\nblanco", 85, 370);      //A
      text("Quedarse\ntomando té", 410, 370);        //B
    } else if (numeroactual === 7) {
      text("Decide no comerlo\ny quedarse", 85, 370);        //A
      text("Decide comerlo y\ncontinuar", 410, 370);      //B
    } else if (numeroactual === 9) {
      text("Ir por la izquierda", 85, 370);          //A
      text("Ir por la derecha", 410, 370);        //B
    } else if (numeroactual === 11) {
      text("Adentrarse a los\nlaberintos del jardín", 85, 370);        //A
      text("Ayudarlos y pintar\nlas rosas de carmín", 410, 370);      //B
    }
  }  
  // Dibujo del boton de reiniciar
  if (numeroactual === 16 || numeroactual === 17 || numeroactual === 19 || numeroactual === 14 || numeroactual === 20) {
    fill(255, 200);
    rect(240, 360, 150, 50);
    fill(0);
    textSize(35);
    text('Reiniciar', 248, 400);
  }
}

function planillabase(pantalla) {
  image(img[pantalla], 0, 0);

  fill(255, 200);
  if (numeroactual !== 0 && numeroactual !== 21) {
    rect(10, 10, 620, 80);
    fill(0);
    textSize(18);
    text(texto[pantalla], 20, 18, 605, 200);
  } else if (numeroactual === 0) {
    textSize(40);
    fill(255);
    text('Alicia en el país de', 120, 40);
    text('las maravillas', 170, 80);
    textSize(16);
    text('Apretar tecla S para activar sonido!', 380, 470);
    rect(230, 320, 150, 50);
    rect(230, 400, 150, 50);
    fill(0);
    textSize(30);
    text('Empezar', 245, 355);
    text('Créditos', 250, 435);
  } else if (numeroactual === 21) {
    textSize(30);
    fill(255);
    text('Hecho por:\n-Camila Rodil y\n-Aylen Abigail Monzón\n-Imagenes: Meta IA', 60, 150);
    rect(390, 390, 90, 50);
    fill(0);
    text('Volver', 392, 425);
  }
}

function mousePressed() {
  // Créditos
  if (numeroactual === 21) {
    if (chequebotoncuadrado(390, 480, 390, 440)) {
      numeroactual = 0; // Volver al menú principal
    }
  }

  // Inicio
  else if (numeroactual === 0) {
    if (chequebotoncuadrado(230, 380, 320, 370)) {
      numeroactual++;
    }
    if (chequebotoncuadrado(230, 380, 400, 450)) {
      numeroactual = 21;
    }
  }

  // Pantallas de reinicio
  else if (numeroactual === 16 || numeroactual === 17 || numeroactual === 19 || numeroactual === 14 || numeroactual === 20) {
    if (chequebotoncuadrado(240, 390, 360, 410, 1)) {
      numeroactual = 0;
    }
  }

  // Saltos temporales
  else if (numeroactual === 5) {
    if (chequebotoncuadrado(400, 550, 350, 400, 1)) { // Botón B
      numeroactual = 15;
    } else if (chequebotoncuadrado(75, 225, 350, 400, 1)) { // Botón A
      numeroactual++;
    }
  }
  else if (numeroactual === 7) {
    if (chequebotoncuadrado(75, 225, 350, 400, 1)) { // Botón A
      numeroactual = 17;
    } else if (chequebotoncuadrado(400, 550, 350, 400, 1)) { // Botón B
      numeroactual++;
    }
  }
  else if (numeroactual === 9) {
    if (chequebotoncuadrado(400, 550, 350, 400, 1)) { // Botón B
      numeroactual = 18;
    } else if (chequebotoncuadrado(75, 225, 350, 400, 1)) { // Botón A
      numeroactual++;
    }
  }
  else if (numeroactual === 11) {
    if (chequebotoncuadrado(75, 225, 350, 400, 1)) { // Botón A
      numeroactual = 20;
    } else if (chequebotoncuadrado(400, 550, 350, 400, 1)) { // Botón B
      numeroactual++;
    }
  }

  // Avanzar pantallas
  else if (chequebotoncuadrado(0, 640, 0, 480)) {
    numeroactual++;
  }
}

function keyPressed(){
  if (key === 's' || key === 'S') {
    if (sonido.isPlaying()) {
      sonido.stop();
    } else {
      sonido.play();
    }
  }
}

function chequebotoncuadrado(posicionx1, posicionx2, posiciony1, posiciony2) {
  return (mouseX > posicionx1 && mouseX < posicionx2 && mouseY > posiciony1 && mouseY < posiciony2);
}
