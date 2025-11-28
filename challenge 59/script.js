class Cronometro {
    constructor() {
        this.inicio = 0
        this.pausado = true
        this.tempoAcumulado = 0
    }
    
    iniciar() {
        if(this.pausado) {
            this.inicio = Date.now()
            this.pausado = false
        }
    }
    
    pausar() {
        if(!this.pausado) {
            this.tempoAcumulado += Date.now() - this.inicio
            this.pausado = true
        }
    }
    
    reset() {
        this.inicio = 0
        this.tempoAcumulado = 0
        this.pausado = true
    }
    
    getTempo() {
        if(this.pausado) {
            return this.tempoAcumulado
        } else {
            return this.tempoAcumulado + (Date.now() - this.inicio)
        }
    }
}

const crono = new Cronometro()
crono.iniciar()
setTimeout(() => console.log(crono.getTempo()), 1000)