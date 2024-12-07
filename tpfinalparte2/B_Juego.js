class Juego {
  constructor() {
    this.pantallaInicio = new PantallaInicio();
    this.pantallaInstrucciones = new PantallaInstrucciones();
    this.pantallaCreditos = new PantallaCreditos();
    this.enPantallaInicio = true;
    this.enPantallaInstrucciones = false;
    this.enPantallaCreditos = false;
    this.enPantallaPerdiste = false;
    this.pantallaActual = 0;
    this.pantallas = [];
    this.trampas = [];
    this.imgFondos = [];
    this.ganarPuntos = 0;

    // Crear pantallas de juego y conejo
    for (let i = 0; i < 10; i++) {
      this.pantallas.push(new conejoBlanco());
      this.imgFondos[i] = loadImage("data/fondo" + i + ".jpg");
    }
    for (let i = 0; i < 3; i++) {
      this.trampas.push(new Trampas());
    }

    // boton Volver en las pantallas finales
    this.botonVolverFinX = width / 2 - 50;
    this.botonVolverFinY = height / 2 + 100;
    this.botonVolverFinAncho = 100;
    this.botonVolverFinAlto = 40;
  }

  dibujarPantalla() {
    if (this.enPantallaInicio) {
      this.pantallaInicio.dibujar();
    } else if (this.enPantallaInstrucciones) {
      this.pantallaInstrucciones.dibujar();
    } else if (this.enPantallaCreditos) {
      this.pantallaCreditos.dibujar();
    } else if (this.enPantallaPerdiste) {
      
      // pantalla perdiste
      image(imgPerdiste, width/2, height/2, width, height);
      textSize(28);
      fill(255);
      text('¡Oh no! Caíste en una trampa y\nperdiste de vista al Conejo', width / 2, height / 2);
      text('¡Vuelve a jugar!', width / 2, height / 2 - 50);
      fill(100, 150, 250);
      rect(this.botonVolverFinX, this.botonVolverFinY, this.botonVolverFinAncho, this.botonVolverFinAlto, 10);
      textSize(24);
      fill(255);
      text("Volver", width / 2, this.botonVolverFinY + this.botonVolverFinAlto / 1.5);
      text(`Puntuación: 10 / ${this.ganarPuntos}`, 120, 460);
    } else if (this.pantallaActual < this.pantallas.length) {
      // dibujará el fondo de la pantalla actual
        image(imgFondos[this.pantallaActual], 0, 0, width*2, height*2);
      this.pantallas[this.pantallaActual].dibujar();
    // dibuja las trampas
    for (let i = 0; i < this.trampas.length; i++) {
      this.trampas[i].dibujar();
    }
      textSize(20);
      fill(255);
      text("Puntos: " + this.ganarPuntos, 60, 30);
    } else {
      
      // Pantalla de victoria
      image(imgGanaste, width/2, height/2, width, height);
      textSize(24);
      fill(255);
      text('¡Tú y el Conejo Blanco\n llegaron el a salvo!', width / 2, height/ 2-20);
      text('¡Ganaste!', width / 2, height / 2-60);
      text(`Puntuación: 10 / ${this.ganarPuntos}`, 120, 460);
      fill(100, 150, 250);
      rect(this.botonVolverFinX, this.botonVolverFinY, this.botonVolverFinAncho, this.botonVolverFinAlto, 10);
      textSize(20);
      fill(255);
      text("Volver", width / 2, this.botonVolverFinY + this.botonVolverFinAlto / 1.5);

    }
  }

  botonVolverFinClickeado(px, py) {
    return px > this.botonVolverFinX && px < this.botonVolverFinX + this.botonVolverFinAncho &&
      py > this.botonVolverFinY && py < this.botonVolverFinY + this.botonVolverFinAlto;
  }

iniciar() {
  if (this.enPantallaInicio) {
    if (this.pantallaInicio.botonEmpezarClickeado(mouseX, mouseY)) {
      this.enPantallaInicio = false;
    } else if (this.pantallaInicio.botonInstruccionesClickeado(mouseX, mouseY)) {
      this.enPantallaInicio = false;
      this.enPantallaInstrucciones = true;
    } else if (this.pantallaInicio.botonCreditosClickeado(mouseX, mouseY)) {
      this.enPantallaInicio = false;
      this.enPantallaCreditos = true;
    }
     // volver de instrucciones o créditos
  } else if (this.enPantallaInstrucciones || this.enPantallaCreditos) {
    if (this.pantallaInstrucciones.botonVolverClickeado(mouseX, mouseY) ||
      this.pantallaCreditos.botonVolverClickeado(mouseX, mouseY)) {
      this.enPantallaInicio = true;
      this.enPantallaInstrucciones = false;
      this.enPantallaCreditos = false;
    }
    // si clickeamos boton volver desde derrota o victoria
  } else if (this.enPantallaPerdiste || this.pantallaActual >= this.pantallas.length) {
    if (this.botonVolverFinClickeado(mouseX, mouseY)) {
      this.enPantallaInicio = true;
      this.enPantallaPerdiste = false;
      this.pantallaActual = 0;
      this.ganarPuntos = 0;
    }
  } else {
    // Revisar si se hace clic en una trampa, llevar a pantalla perdiste
    for (let i = 0; i < this.trampas.length; i++) {
      let trampa = this.trampas[i];
      if (trampa.estaClickeado(mouseX, mouseY)) {
        this.enPantallaPerdiste = true;
        return;
      }
    }
    // Si no se clickeo ninguna trampa, revisar el conejo
    let conejoBlanco = this.pantallas[this.pantallaActual];
    if (conejoBlanco.estaClickeado(mouseX, mouseY)) {
      this.pantallaActual++;
      this.ganarPuntos += 1;
      // resetear trampas
      this.trampas = [];
      for (let i = 0; i < 3; i++) {
        this.trampas.push(new Trampas());
      }
    }
  }
}
}
