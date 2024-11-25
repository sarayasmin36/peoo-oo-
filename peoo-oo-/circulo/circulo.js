"use strict";
class Circulo {
    constructor(raio, x, y) {
        this.raio = raio;
        this.x = x;
        this.y = y;
    }
    getRaio() {
        return this.raio;
    }
    setRaio(r) {
        if (r <= 0)
            console.log('Você já estudou Geometria??');
        else if (r > 15)
            console.log('Raio não alterado. Limite ultrapassado.');
        else
            this.raio = r;
    }
    mover(x, y) {
        this.x += x; // this.x = this.x + x;
        this.y += y; // this.y = this.y + y;
    }
    aumentar(r) {
        this.raio += r;
    }
    exibir() {
        return `Raio: ${this.raio}, X: ${this.x}, Y: ${this.y}`;
    }
}
let circulo1 = new Circulo(2, 0, 0);
circulo1.aumentar(15);
console.log(circulo1.exibir());
circulo1.setRaio(-4);
console.log(circulo1.getRaio());
console.log(circulo1.getRaio());
