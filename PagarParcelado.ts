function calcularPagamentoParcelado(valorMercadoria: number):
    {
        entrada: number,
        prestacao: number
    }
    {
    const prestacao = Math.floor(valorMercadoria / 3);
    const entrada = valorMercadoria - (prestacao * 2);
    return {
        entrada,
        prestacao
    };
}

// Exemplos de uso:
console.log(calcularPagamentoParcelado(270.00)); // { entrada: 90, prestacao: 90 }
console.log(calcularPagamentoParcelado(302.75)); // { entrada: 102.75, prestacao: 100 }
console.log(calcularPagamentoParcelado(302.75));

export default calcularPagamentoParcelado;
