// Tabuleiro como array de 1 a 9
let tabuleiro = ['1','2','3','4','5','6','7','8','9'];
let jogadorAtual = 'X';

function exibirTabuleiro() {
    console.clear();
    console.log(`
 ${tabuleiro[0]} | ${tabuleiro[1]} | ${tabuleiro[2]}
---+---+---
 ${tabuleiro[3]} | ${tabuleiro[4]} | ${tabuleiro[5]}
---+---+---
 ${tabuleiro[6]} | ${tabuleiro[7]} | ${tabuleiro[8]}
    `);
}

function jogar(posicao) {
    if (tabuleiro[posicao-1] === 'X' || tabuleiro[posicao-1] === 'O') {
        console.log('Posição ocupada!');
        return;
    }
    tabuleiro[posicao-1] = jogadorAtual;
    exibirTabuleiro();
    if (verificarVitoria()) {
        console.log(`Jogador ${jogadorAtual} venceu!`);
        return;
    }
    if (tabuleiro.every(c => c === 'X' || c === 'O')) {
        console.log('Empate!');
        return;
    }
    jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
    console.log(`Vez do jogador ${jogadorAtual}`);
}

function verificarVitoria() {
    const vitorias = [
        [0,1,2],[3,4,5],[6,7,8], // linhas
        [0,3,6],[1,4,7],[2,5,8], // colunas
        [0,4,8],[2,4,6]          // diagonais
    ];
    return vitorias.some(comb =>
        comb.every(i => tabuleiro[i] === jogadorAtual)
    );
}

// Exemplo de uso:
exibirTabuleiro();
// Para jogar: jogar(1) // coloca X ou O na posição 1