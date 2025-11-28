class Puzzle8 {
    constructor() {
        this.tabuleiro = [1,2,3,4,5,6,7,8,0]
        this.posicaoVazia = 8
    }
    
    embaralhar() {
        for(let i = 0; i < 1000; i++) {
            const movimentos = this.movimentosPossiveis()
            const movimento = movimentos[Math.floor(Math.random() * movimentos.length)]
            this.mover(movimento)
        }
    }
    
    movimentosPossiveis() {
        const movimentos = []
        const linha = Math.floor(this.posicaoVazia / 3)
        const coluna = this.posicaoVazia % 3
        
        if(linha > 0) movimentos.push(this.posicaoVazia - 3)
        if(linha < 2) movimentos.push(this.posicaoVazia + 3)
        if(coluna > 0) movimentos.push(this.posicaoVazia - 1)
        if(coluna < 2) movimentos.push(this.posicaoVazia + 1)
        
        return movimentos
    }
    
    mover(posicao) {
        [this.tabuleiro[this.posicaoVazia], this.tabuleiro[posicao]] = 
        [this.tabuleiro[posicao], this.tabuleiro[this.posicaoVazia]]
        this.posicaoVazia = posicao
    }
    
    resolvido() {
        for(let i = 0; i < 8; i++) {
            if(this.tabuleiro[i] !== i + 1) return false
        }
        return this.tabuleiro[8] === 0
    }
}

const puzzle = new Puzzle8()
puzzle.embaralhar()
console.log(puzzle.tabuleiro)