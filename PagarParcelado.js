/**
 * Calcula o valor da entrada e das duas prestações para uma compra parcelada.
 * 
 * Regras:
 * - A entrada deve ser maior ou igual às duas prestações
 * - As duas prestações devem ser iguais, inteiras e as maiores possíveis
 * 
 * @param {number} valorMercadoria O valor total da mercadoria em reais
 * @returns {Object} Um objeto contendo o valor da entrada e o valor de cada prestação
 */
function calcularPagamentoParcelado(valorMercadoria) {
    // Calcula o valor máximo possível para cada prestação (inteiro)
    // O valor total deve ser dividido em 3 partes (entrada + 2 prestações)
    // As prestações devem ser iguais e inteiras (floor)
    const prestacao = Math.floor(valorMercadoria / 3);
    
    // A entrada é o valor restante após subtrair as duas prestações
    const entrada = valorMercadoria - (prestacao * 2);
    
    return {
        entrada,
        prestacao
    };
}

// Exemplos de uso:
console.log("Exemplo 1 - Valor: R$ 270.00");
console.log(calcularPagamentoParcelado(270.00)); // { entrada: 90, prestacao: 90 }

console.log("\nExemplo 2 - Valor: R$ 302.75");
console.log(calcularPagamentoParcelado(302.75)); // { entrada: 102.75, prestacao: 100 }

// Não exportamos o módulo aqui para simplificar o teste