/**
 * 
 * 
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100:
ma che per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Note: i bonus sono da considerarsi validi solo E SOLTANTO se avete finito l'esercizio base con successo.
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
 *
 *
 **/

//Dichiaro e assegno le variabili Fizz e Buzz
const printFizz = "Fizz"
const printBuzz = "Buzz"

//Dichiaro e assegno una variabiale al tag main
const main = document.querySelector('main')

//Avvio il ciclo For per numeri che vanno da 1 a 100
for (let index = 1; index <= 100; index++) {

    //Se un un numero è divisibile sia per 3 che per 5 stampo *FizzBuzz* in console, altimenti se un numero è divisibile solo per 3 stampo *Fizz* in console, altrimenti se un numero è divibile per 5 stampo *Buzz* in console, altrimenti stampo semplicemente il numero //

    if ((index % 3 === 0) && (index % 5 === 0)){
        console.warn(printFizz + printBuzz);
        main.append(printFizz + printBuzz);

    } else if (index % 3 === 0){
        console.log(printFizz);
        main.append(printFizz);

    } else if (index % 5 === 0){
        console.error(printBuzz);
        main.append(printBuzz);

    } else {
        console.info(index);
        main.append(index);
    }
}