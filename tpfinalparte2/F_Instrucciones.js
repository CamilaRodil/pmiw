class PantallaInstrucciones {
  constructor() {
    this.texto = "Instrucciones:\nEscapa junto al Conejo Blanco para volver\nal mundo real.Evita las cartas de poker\n¡Son trampas de la Reina de Corazones!\n¡Buena suerte!";
    this.texto2 ="Apreta S para activar y desactivar el sonido";
    this.botonVolverX = width / 2 - 50;
    this.botonVolverY = height / 2 + 100;
    this.botonVolverAncho = 100;
    this.botonVolverAlto = 40;
  }

  dibujar() {
    imageMode(CENTER);
    image(imgInstrucciones, width/2, height/2, width, height);
    textSize(20);
    fill(255);
    textAlign(CENTER);
    text(this.texto, width / 2, height / 2-40);
    text(this.texto2, width / 2, 440);


    // Dibujar botonn volver
    fill(100, 150, 250);
    rect(this.botonVolverX, this.botonVolverY, this.botonVolverAncho, this.botonVolverAlto, 10);

    // Texto boton volver
    textSize(20);
    fill(255);
    text("Volver", width / 2, this.botonVolverY + this.botonVolverAlto / 1.5);
  }

  botonVolverClickeado(px, py) {
    return px > this.botonVolverX && px < this.botonVolverX + this.botonVolverAncho &&
           py > this.botonVolverY && py < this.botonVolverY + this.botonVolverAlto;
  }
}
