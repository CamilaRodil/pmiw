class Sonido {
  constructor(sonido) {
    this.sonido = sonido;
  }

  comienza() {
    if (key === 's' || key === 'S') {
      if (this.sonido.isPlaying()) {
        this.sonido.stop(); //detiende el sonido
      } else {
        this.sonido.play(); // reproduce el sonido
      }
    }
  }
}

let sonidoControl;
