function calcularParcelas(valorTotal: number): {
    entrada: number,
    prestacao: number } {

    valorTotal = Number(valorTotal.toFixed(2));
    let prestacao = Math.floor(valorTotal / 3);


    let entrada = valorTotal - (prestacao * 2);
    if (entrada < prestacao) {
        prestacao = Math.floor((valorTotal - 0.01) / 3);
        entrada = valorTotal - (prestacao * 2);
    }

    return {
        entrada: Number(entrada.toFixed(2)),
        prestacao: prestacao
    };
}
export default calcularParcelas;