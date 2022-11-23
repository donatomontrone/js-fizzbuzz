

//Dichiaro e assegno le variabili Fizz e Buzz
const printFizz = "Fizz"
const printBuzz = "Buzz"

//Dichiaro e assegno una variabiale al tag main
const main = document.querySelector('main')

//Avvio il ciclo For per numeri che vanno da 1 a 100
for (let index = 1; index <= 100; index++) {
    //Se un un numero è divisibile sia per 3 che per 5 stampo *FizzBuzz* in console, altimenti se un numero è divisibile solo per 3 stampo *Fizz* in console, altrimenti se un numero è divibile per 5 stampo *Buzz* in console, altrimenti stampo semplicemente il numero //
    let colorClass;
    let result;

    if ((index % 3 === 0) && (index % 5 === 0)){
        console.warn(printFizz + printBuzz);
        colorClass = 'color-fizzbuzz';
        result = printFizz + printBuzz;
    } else if (index % 3 === 0){
        console.log(printFizz);
        colorClass = 'color-fizz';
        result = printFizz;
    } else if (index % 5 === 0){
        console.error(printBuzz);
        colorClass = 'color-buzz';
        result = printBuzz;
    } else {
        console.info(index);
        colorClass = 'color-number';
        result = index;
    }
    main.innerHTML += `<p class="${colorClass}"> ${result} </p>`
}