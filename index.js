const nickJogador = prompt("Qual seu nick? ");
const numeroVitórias = parseInt(prompt("Quantas vitórias no total você possui? "));
const numeroDerrotas = parseInt(prompt("Quantas derrotas no total você possui? "));

const saldo = numeroVitórias - numeroDerrotas;

function determinarNivel(saldo) {
    if (saldo <= 10) return "Ferro";
    if (saldo <= 20) return "Bronze";
    if (saldo <= 50) return "Prata";
    if (saldo <= 80) return "Ouro";
    if (saldo <= 90) return "Diamante";
    if (saldo <= 100) return "Lendário";
    return "Imortal";
}

const nivel = determinarNivel(saldo);
console.log(`${nickJogador} tem saldo de ${saldo} e está no nível ${nivel}`);
