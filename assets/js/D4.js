/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1 * l2;
}

console.log(area(3, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else return num1 + num2;
}

console.log(crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(num1) {
  const sottraendo = 19;
  if (num1 > sottraendo) {
    return Math.abs((num1 - sottraendo) * 3);
  } else return Math.abs(num1 - sottraendo);
}

console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else return "La funzione non accetta il parametro che mi hai inserito";
}

console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(start) {
  startUpper = start.toUpperCase();
  if (startUpper.search("EPICODE") != -1) {
    return start;
  } else return "EPICODE ".concat(start);
}

console.log(epify("è un bel posto"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
  if (n > 0) {
    if (n % 3 === 0) {
      return "Il numero è divisibile per 3";
    } else if (n % 7 === 0) {
      return "Il numero è divisibile per 7";
    } else return "Il numero non è divisibile nè per 3 nè per 7";
  }
}

console.log(check3and7(33333333333));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringToInvert) {
  stringToInvert = stringToInvert.trim();
  invertedString = stringToInvert.split("");
  invertedString = invertedString.reverse().join("");
  return invertedString;
}

console.log(reverseString("Ciao       "));

// Metodo alternativo
/*   let invertedString;
  for (let i = stringToInvert.lenght() - 1; i >= 0; i--) {
    let j = 0;
    invertedString[j] = stringToInvert[i];
    j++;
  }
  return invertedString;
}
 */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(stringToUpper) {
  stringToUpper = stringToUpper.trim();
  let splittedWords = stringToUpper.split(" ");
  let parola;
  for (let i = 0; i < splittedWords.length; i++) {
    parola = splittedWords[i];
    parola = parola.charAt(0).toUpperCase() + parola.slice(1);
    splittedWords[i] = parola;
  }
  return splittedWords;
}

console.log(upperFirst("ciao a tutti      "));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(stringToSlice) {
  let slicedString = stringToSlice.slice(1, -1);
  return slicedString;
}

console.log(cutString("MMi piace la bananaa"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  let array = [];
  for (i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * 11);
  }
  return array;
}

console.log(giveMeRandom(10));
