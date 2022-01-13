console.log("JS OK");

// # Mail
// Crea un array di email;
// Chiedi all’utente la sua email.
// controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.


//MAIL 

//ARRAY CON LE MAIL STORATE
const emails = ["mail1@gmail.com", "mail2@gmail.com", "mail3@gmail.com"];
console.table(emails);

//CHIEDERE MAIL ALL'UTENTE
const currentEmail = prompt("Qual è la tua mail?", "example.mail@gmail.com").trim();
console.log(currentEmail);

// SPECIFICO FLAG
let isValid = false;

//ACCOGLIENZA SE MAIL PRESENTE, NOTIFICA SE MAIL ASSENTE
for (let i = 0; i < emails.length; i++) {
    if (emails[i] == currentEmail) {
        isValid = true;
    }
}

if (isValid) {
    console.log('Benvenuto!');
} else {
    console.log('Email errata, ritenta!');
}


// if (emails.includes(currentEmail)) {
//     console.log("Bentornato!");
// } else {
//     console.log("Email errata, se è la prima volta procedi con la registrazione, altrimenti ritenta");
// }
