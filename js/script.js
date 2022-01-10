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

let emails = ["mail1@gmail.com", "mail2@gmail.com", "mail3@gmail.com", "mail4@gmail.com"];
console.table(emails);

const currentEmail = prompt("Qual è la tua mail?", "example.mail@gmail.com").trim("");
console.log(currentEmail);

if (emails.includes(currentEmail)) {
    console.log("Bentornato!");
} else {
    console.log("Email errata, se è la prima volta procedi con la registrazione, altrimenti ritenta");
}