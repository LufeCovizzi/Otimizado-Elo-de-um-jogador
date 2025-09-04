# Ranking de Jogadores

Este projeto é um programa em **JavaScript** que calcula o saldo de vitórias de um jogador e determina seu nível no ranking de forma otimizada e legível.

## Funcionalidades

- Solicita o **nick do jogador**.
- Solicita o **número total de vitórias**.
- Solicita o **número total de derrotas**.
- Calcula o **saldo de vitórias** (vitórias - derrotas).
- Determina o **nível do jogador** com base no saldo:
  - Ferro: saldo ≤ 10
  - Bronze: 11 ≤ saldo ≤ 20
  - Prata: 21 ≤ saldo ≤ 50
  - Ouro: 51 ≤ saldo ≤ 80
  - Diamante: 81 ≤ saldo ≤ 90
  - Lendário: 91 ≤ saldo ≤ 100
  - Imortal: saldo > 100
- Exibe no console o **nome do jogador, saldo e nível**.

## Código otimizado

```javascript
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
