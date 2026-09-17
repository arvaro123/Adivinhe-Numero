function startGame() {
    alert("Bem vindo, vamos começar o nosso desafio de adivinhação");
    const num1 = Math.floor(Math.random() * 100) + 1;
    const respostaCerta = num1;

    let contador = 0;
    let palpite = prompt("Qual o número que eu escolhi?");
   
    while (palpite != respostaCerta) {
        if (palpite > respostaCerta) {
            alert("Muito alto");
        } else if (palpite < respostaCerta) {
            alert("Muito baixo!");
        }
     contador++;
     palpite = prompt("Qual o número que eu escolhi?");
}
    alert("Você adivinhou! Com um total de: " + contador + " tentativas!");
