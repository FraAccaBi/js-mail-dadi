/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
 */


//creo una whitelist per le mail accettate
const whitelist = ["ciccio@gmail.com", "franco@gmail.com"]

//creo una variabile con la mail dell'utente tramite input 
const userMail = prompt('inserisci mail');

//calcolo la dimensione dell'array che mi servirà nella condizione del ciclo for
const dim_whitelist = whitelist.length

//creo una variabile presence di valore false che diventerà true  qualora la mail fosse presente nell'arrai per permettermi di uscire dal ciclo
let presence = false;

//confronto la variabile ottenuta con la mia whitelist
for (let i = 0; i < dim_whitelist; i++) {
    if (userMail == whitelist[i]) {
        console.log('iscrizione avvenuta con successo');
        presence =true;
    } 
}

//in caso di assenza della mail nell'array restituisco un messaggio in console
if(!presence){
    console.log('la tua mail non è abilitata');
}






/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

//genero un vaolre random per il giocatore
const player_number = Math.ceil(Math.random()*6)
console.log(player_number);

//genero un valore random per il pc
const pc_number = Math.ceil(Math.random()*6)
console.log(pc_number);

//confronto
if (player_number > pc_number) {
    console.log('hai vinto');
} else if (player_number == pc_number){
    console.log('pareggio');
} else {
    console.log('hai perso');
}


/* 
BONUS:
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina. */