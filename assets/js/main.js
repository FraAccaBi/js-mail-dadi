/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
non bisogna ricordarsi a memoria come generare dei numeri random, c'é W3S per questo https://www.w3schools.com/js/js_random.asp
BONUS:
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina. */


//creo una whitelist per le mail accettate
const whitelist = ["ciccio@gmail.com", "franco@gmail.com"]


//creo una variabile associata la mail dell'user

const userMail = prompt('inserisci mail');
const dim_whitelist = whitelist.length
/* document.getElementById('user_mail') */
//confronto la variabile ottenuta con la mia whitelist

let presence = false;

for (let i = 0; i < dim_whitelist; i++) {
    if (userMail == whitelist[i]) {
        console.log('iscrizione avvenuta con successo');
        presence =true;
    } 
}

if(!presence){
    console.log('la tua mail non è abilitata');
}
