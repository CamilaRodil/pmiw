class conejoBlanco {
  constructor() {
    this.x = random(100, 500);
    this.y = random(100, 350);
    this.tamaño = 150;
  }

  dibujar() {
    imageMode(CENTER);
    image(imgConejo, this.x, this.y, this.tamaño, this.tamaño);
  }

  estaClickeado(px, py) {
    return dist(px, py, this.x, this.y) < this.tamaño / 2;
  }
}
