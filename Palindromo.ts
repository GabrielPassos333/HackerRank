/**
 * Verifica se uma string é um palíndromo.
 * @param texto - A string a ser verificada
 * @returns true se for um palíndromo, false caso contrário
 */
function verificarPalindromo(texto: string): boolean {
    texto = texto.toLowerCase();
    let resultado="";
    //let inverso = "";

    for(let i=0; i<texto.length; i++){
        let caractere = texto[i]
        if(caractere>='a' && caractere<='z'){
            resultado += caractere
        }
    }
    let inverso = resultado.split('').reverse().join('');

    return resultado === inverso;
}

export { verificarPalindromo };

console.log(verificarPalindromo("Socorram-me, subi no ônibus em Marrocos"))

/*

function testar(texto: string){
    texto = texto.toLowerCase();
    let resultado="";
    //let inverso = "";

    for(let i=0; i<texto.length; i++){
        let caractere = texto[i]
        if(caractere>='a' && caractere<='z'){
            resultado += caractere
        }
    }
    let inverso = resultado.split('').reverse().join('');

    return resultado === inverso;
}
console.log(testar("ana"))*/