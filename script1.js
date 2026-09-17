function blabla() {
    
    alert("Bem vindo, adivinhe se for capaz");
    const num1 = Math.floor(Math.random() * 100) + 1;
    const resposta = num1;

    let contador = 0;
    let palpite = prompt("Qual o número que eu escolhi?");
   
    while (palpite != resposta) {
        if (palpite > resposta) {
            alert("passou");
        } else if (palpite < resposta) {
            alert("falta um pouco!");
        }
     contador++;
     palpite = prompt("Qual o número que eu escolhi?");
}
    alert("Finalmente! e so precisou de: " + contador + " tentativas!");
