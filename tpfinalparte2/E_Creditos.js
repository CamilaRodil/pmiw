class PantallaCreditos {
  constructor() {
    this.texto = "Créditos:\nCamila Rodil, Aylen Abigail Monzón\nImagenes hechas con IA";
    this.botonVolverX = width / 2 - 50;
    this.botonVolverY = height / 2 + 100;
    this.botonVolverAncho = 100;
    this.botonVolverAlto = 40;
  }

  dibujar() {
    imageMode(CENTER);
    image(imgCreditos, width/2, height/2, width, height);
    textSize(24);
    fill(255);
    textAlign(CENTER);
    text(this.texto, width / 2, height / 3);
    fill(100, 150, 250);
    rect(this.botonVolverX, this.botonVolverY, this.botonVolverAncho, this.botonVolverAlto, 10);
    textSize(20);
    fill(255);
    text("Volver", width / 2, this.botonVolverY + this.botonVolverAlto / 1.5);
  }

  botonVolverClickeado(px, py) {
    return px > this.botonVolverX && px < this.botonVolverX + this.botonVolverAncho &&
           py > this.botonVolverY && py < this.botonVolverY + this.botonVolverAlto;
  }
}
