class JogoDaVelha {
    constructor() {
        this.tabuleiro = Array(9).fill('')
        this.jogadorAtual = 'X'
        this.jogoAtivo = true
    }
    
    fazerJogada(posicao) {
        if(!this.jogoAtivo || this.tabuleiro[posicao] !== '') return false
        
        this.tabuleiro[posicao] = this.jogadorAtual
        
        if(this.verificarVitoria()) {
            this.jogoAtivo = false
            return `Jogador ${this.jogadorAtual} venceu!`
        }
        
        if(this.tabuleiro.every(celula => celula !== '')) {
            this.jogoAtivo = false
            return "Empate!"
        }
        
        this.jogadorAtual = this.jogadorAtual === 'X' ? 'O' : 'X'
        return true
    }
    
    verificarVitoria() {
        const linhasVitoria = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ]
        
        return linhasVitoria.some(linha => 
            this.tabuleiro[linha[0]] !== '' &&
            this.tabuleiro[linha[0]] === this.tabuleiro[linha[1]] &&
            this.tabuleiro[linha[1]] === this.tabuleiro[linha[2]]
        )
    }
}

const jogo = new JogoDaVelha()
console.log(jogo.fazerJogada(0))
console.log(jogo.fazerJogada(3))
console.log(jogo.fazerJogada(1))
console.log(jogo.fazerJogada(4))
console.log(jogo.fazerJogada(2))