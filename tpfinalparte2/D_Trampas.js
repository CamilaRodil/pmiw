class Trampas {
  constructor() {
    this.x = random(100, 500);
    this.y = random(100, 350);
    this.ancho = 50;
    this.alto = 70;
  }

  dibujar() {
    fill(255);
    rect(this.x, this.y, this.ancho, this.alto);
    fill(255,0,0);
    textSize(12);
    text("A", this.x+8, this.y+15);
    text("A", this.x+40, this.y+63);
    push(); // guarda en la configuración actual
    translate(this.x + 25, this.y + 35); 
    rotate(PI / 4); // rotat en 45 grados (en radianes)
    fill(255, 0, 35);
    rectMode(CENTER); 
    rect(0, 0, 20, 20); 
    pop(); 
  }

  estaClickeado(px, py) {
    return px > this.x && px < this.x + this.ancho &&
      py > this.y && py < this.y + this.alto;
  }
}
