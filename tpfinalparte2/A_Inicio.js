class PantallaInicio {
  constructor() {
    this.titulo = "Alicia huyendo del\npaís de las Maravillas";
    this.texto2 = "Apreta S para activar y desactivar el sonido";
    this.botonEmpX = width / 2 - 50;
    this.botonEmpY = height / 2;
    this.botonEmpAncho = 100;
    this.botonEmpAlto = 40;
    // Botón de instrucciones
    this.botonInsX = width / 2 - 70;
    this.botonInsY = height / 2 + 60;
    this.botonInsAncho = 140;
    this.botonInsAlto = 40;
    // Botón de creditos
    this.botonCreX = width / 2 - 50;
    this.botonCreY = height / 2 + 120;
    this.botonCreAncho = 102;
    this.botonCreAlto = 40;
  }

  dibujar() {
    imageMode(CENTER);
    image(imgInicio, width/2, height/2, width, height);
    textSize(30);
    fill(255);
    textAlign(CENTER);
    text(this.titulo, width / 2, height / 3);
    textSize(20);
    text(this.texto2, width / 2, 440);

    // Dibujar botones
    fill(100, 150, 250);
    rect(this.botonEmpX, this.botonEmpY, this.botonEmpAncho, this.botonEmpAlto, 10);
    rect(this.botonInsX, this.botonInsY, this.botonInsAncho, this.botonInsAlto, 10);
    rect(this.botonCreX, this.botonCreY, this.botonCreAncho, this.botonCreAlto, 10);

    // Dibujar texto de los botones
    textSize(20);
    fill(255);
    text("Empezar", width / 2, this.botonEmpY + this.botonEmpAlto / 1.5);
    text("Instrucciones", width / 2, this.botonInsY + this.botonInsAlto / 1.5);
    text("Créditos", width / 2 + 2, this.botonCreY + this.botonCreAlto / 1.5);
  }

  botonEmpezarClickeado(px, py) {
    return px > this.botonEmpX && px < this.botonEmpX + this.botonEmpAncho &&
      py > this.botonEmpY && py < this.botonEmpY + this.botonEmpAlto;
  }

  botonInstruccionesClickeado(px, py) {
    return px > this.botonInsX && px < this.botonInsX + this.botonInsAncho &&
      py > this.botonInsY && py < this.botonInsY + this.botonInsAlto;
  }

  botonCreditosClickeado(px, py) {
    return px > this.botonCreX && px < this.botonCreX + this.botonCreAncho &&
      py > this.botonCreY && py < this.botonCreY + this.botonCreAlto;
  }
}
