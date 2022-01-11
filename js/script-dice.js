console.log("JS OK");

// # Gioco dei dadi
//  Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Stampare in console i tiri di dado e il risultato.

//GIOCO DEI DADI

//RANDOM NUMBER PER IL GIOCATORE
const playerNumber = Math.floor(Math.random() * 6) +1;
console.log(playerNumber);

//RANDOM NUMBER PER IL PC 
const computerNumber = Math.floor(Math.random() * 6) +1;
console.log(computerNumber);

//PARITà DI DEFAULT
let result = 'Nessuno dei due giocatori ha vinto, parità!';
//PLAYER VINCE 
if (playerNumber > computerNumber){
    result = (`Il Player ha vinto, con un punteggio di ${playerNumber}`);
//COMPUTER VINCE
} else if (computerNumber > playerNumber) {
    result = (`Il Computer ha vinto, con un punteggio di ${computerNumber}`);
}

display.innerHTML = `<div>Numero Player: <strong>${playerNumber}</strong></div>
<div>Numero Computer: <strong>${computerNumber}</strong></div>
<div>${result}</div>`