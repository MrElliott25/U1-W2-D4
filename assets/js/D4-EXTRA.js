// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * 11);
  }
  console.log(array);

  return array;
}

function checkArray(array) {
  let somma = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      console.log("L'elemento all'indice " + i + " è maggiore di 5");
      somma += array[i];
    }
  }
  console.log("E la somma di tutti gli elementi maggiori di 5 è di " + somma);
}

console.log(checkArray(giveMeRandom(10)));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let shoppingCart = [
  {
    price: 3.5,
    name: "Coca Cola Double Pack",
    id: 3036,
    quantity: 2,
  },
  {
    price: 1,
    name: "Pommidori Marca Pefforza",
    id: 36,
    quantity: 3,
  },
];

function shoppingCartTotal(cart) {
  let total = 0;
  for (i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  return total;
}

console.log(shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const newProduct = {
  price: 2,
  quantity: 5,
  name: "L Marang",
  id: 444,
};
function addToShoppingCart(newObj) {
  shoppingCart.push(newObj);
}

addToShoppingCart(newProduct);

console.table(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(cart) {
  let maxPrice = 0;
  let maxObj;
  for (i = 0; i < cart.length; i++) {
    if (cart[i].price > maxPrice) maxPrice = cart[i].price;
  }
  console.log(maxPrice);

  for (i = 0; i < cart.length; i++) {
    if (cart[i].price === maxPrice) maxObj = Object.assign(cart[i]);
  }
  console.log("L'oggetto più costoso è il seguente:");
  console.log(maxObj);

  return maxObj;
}

maxShoppingCart(shoppingCart);

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart(cart) {
  let latestObj = Object.assign(cart[cart.length - 1]);
  console.log("L'ultimo oggetto aggiunto è il seguente:");

  console.log(latestObj);

  return latestObj;
}

latestShoppingCart(shoppingCart);

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function loopUntil(n) {
  if (n < 0 && n > 9) {
    console.log("La funziona non accetta questo parametro");
  } else {
    let counter = 0;
    let random;
    do {
      random = Math.floor(Math.random() * 10);
      if (random > n) {
        counter++;
        console.log(random);
      } else {
        counter = 0;
        console.log(random);
      }
    } while (counter != 3);
    console.log("Qui si interrompe il loop!");
  }
}

loopUntil(2);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let mixUp = [0, 4, 4, "Aldo Moro", 4, "Pippo"];
function average(array) {
  let avg = 0;
  let somma = 0;
  counter = 0; //Non lo dichiaro poichè ho una variabile con lo stesso nome sopra, so che non si fa, ma è pigrizia
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      somma += parseInt(array[i]);
      counter++;
    }
  }
  avg = somma / counter;
  return avg;
}

console.log(average(mixUp));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

tanteStringe = ["Ciao", "mi", "chiamo", "Stefano"];
function longest(stringArray) {
  let maxWord = stringArray[0];
  for (i = 1; i < stringArray.length; i++) {
    if (maxWord.length < stringArray[i].length) maxWord = stringArray[i];
  }
  return maxWord;
}

console.log(longest(tanteStringe));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function antiSpam(emailContent) {
  emailtoUpper = emailContent.toUpperCase();
  let spamFlag = false;

  if (emailtoUpper.search("SPAM") === -1 && emailtoUpper.search("SCAM") === -1) spamFlag = true;
  return spamFlag;
}

console.log(antiSpam("Ciao mi chiamo Mario"));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function passedTime(inputDate) {
  let today = new Date();
  let passedDate = new Date(inputDate);

  //Ammetto che ho cercato su internet la base logica e i metodi per farlo

  //Comincio calcolando la differenza in millisecondi dalla data in input e la data di oggi
  const msDifference = today.getTime() - passedDate.getTime();

  //Poi la converto in giorni
  const dayDiff = msDifference / (1000 * 60 * 60 * 24);

  return Math.floor(dayDiff);
}
const data = "2025-12-01";
passedDays = passedTime(data);
console.log("Sono passati " + passedDays + " giorni dalla data inserita");

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function matrixGenerator(x, y) {
  let matrix = [];
  for (i = 0; i < y; i++) {
    let row = [];
    for (let j = 0; j < x; j++) {
      row.push();
    }
    matrix.push(row);
  }
  console.table(matrix);
}

matrixGenerator(3, 2);
