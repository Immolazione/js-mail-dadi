console.log("JS OK");

// # Mail
// Crea un array di email;
// Chiedi all’utente la sua email.
// controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.

// # Gioco dei dadi
//  Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Stampare in console i tiri di dado e il risultato.

//MAIL 

//ARRAY CON LE MAIL STORATE
const emails = ["mail1@gmail.com", "mail2@gmail.com", "mail3@gmail.com", "mail4@gmail.com"];
console.table(emails);

//CHIEDERE MAIL ALL'UTENTE
const currentEmail = prompt("Qual è la tua mail?", "example.mail@gmail.com").trim("");
console.log(currentEmail);

//ACCOGLIENZA SE MAIL PRESENTE, NOTIFICA SE MAIL ASSENTE
for (let i = 0; i < emails.length; i++) {
    if (emails[i] === currentEmail) {
        console.log("Bentornato!");
    } else {
        console.log("Email errata, se è la prima volta procedi con la registrazione, altrimenti ritenta");
        }
}

// if (emails.includes(currentEmail)) {
//     console.log("Bentornato!");
// } else {
//     console.log("Email errata, se è la prima volta procedi con la registrazione, altrimenti ritenta");
// }

//GIOCO DEI DADI

//RANDOM NUMBER PER IL GIOCATORE
const playerNumber = Math.floor(Math.random() * 6) +1;
console.log(playerNumber);

//RANDOM NUMBER PER IL PC 
const computerNumber = Math.floor(Math.random() * 6) +1;
console.log(computerNumber);

//PARITà DI DEFAULT
let restult = 'Nessuno dei due giocatori ha vinto, parità!';
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