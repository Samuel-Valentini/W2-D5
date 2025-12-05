/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

// console.log("online");

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();

console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

for (let i = 0; i < pets.length; i++) {
  console.log(pets[pets.length - 1 - i]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.push(pets.shift());

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

// creo una funzione in grado di generare numeri di targa ogni volta che viene richiamata

function licensePlateGenerator() {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let licensePlateGen = [];

  for (let i = 0; i < 9; i++) {
    let randomAlphabetNumber = Math.floor(Math.random() * alphabet.length);
    licensePlateGen[i] = alphabet[randomAlphabetNumber];
  }

  licensePlateGen[2] = " ";
  licensePlateGen[6] = " ";

  for (let i = 3; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    licensePlateGen[i] = randomNumber;
  }

  let licensePlateGenFinal = licensePlateGen.join("");

  return licensePlateGenFinal;
}

// funzione creata

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlateGenerator();
}

// console.log(cars);

/* ESERCIZIO 6
Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newObject = {
  brand: "Ferrari",
  model: "Enzo",
  color: "race red",
  trims: ["limited edition", "FXX", "FXX Evoluzione"],
};

cars[cars.length] = newObject;

for (i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

// console.log(cars);

/* ESERCIZIO 7
Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (i = 0; i < cars.length; i++) {
  justTrims[i] = cars[i].trims.slice(0, 1);

  // per evitare che ogni elemento dell'array sia a sua volta un array ma con un solo elemento procedo a convertire l'array elemento in stringa

  justTrims[i] = justTrims[i].toString();
}

console.log(justTrims);

/* ESERCIZIO 8
Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
"color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (i = 0; i < cars.length; i++) {
  if ("b" === cars[i].color.charAt(0)) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
let counter = 0;
let numero = null;
while (numero !== 32) {
  console.log(numericArray[counter]);
  counter += 1;
  numero = numericArray[counter];
}

// se invece avessi voluto includere anche il 32 avrei potuto fare:

counter = 0;
numero = null;

do {
  numero = numericArray[counter];
  console.log(numericArray[counter]);
  counter += 1;
} while (numero !== 32);

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const italianAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Z"];
const charactersArrayNum = charactersArray.slice();

for (let i = 0; i < charactersArrayNum.length; i++) {
  charactersArrayNum[i] = charactersArrayNum[i].toUpperCase(); // per comodità avendo l'array italianAlphabet in maiuscolo trasformo l'array fornito in maiuscolo, tanto poi l'array numerico non cambierà

  switch (charactersArrayNum[i]) {
    case italianAlphabet[0]:
      charactersArrayNum[i] = 1;
      break;
    case italianAlphabet[1]:
      charactersArrayNum[i] = 2;
      break;
    case italianAlphabet[2]:
      charactersArrayNum[i] = 3;
      break;
    case italianAlphabet[3]:
      charactersArrayNum[i] = 4;
      break;
    case italianAlphabet[4]:
      charactersArrayNum[i] = 5;
      break;
    case italianAlphabet[5]:
      charactersArrayNum[i] = 6;
      break;
    case italianAlphabet[6]:
      charactersArrayNum[i] = 7;
      break;
    case italianAlphabet[7]:
      charactersArrayNum[i] = 8;
      break;
    case italianAlphabet[8]:
      charactersArrayNum[i] = 9;
      break;
    case italianAlphabet[9]:
      charactersArrayNum[i] = 10;
      break;
    case italianAlphabet[10]:
      charactersArrayNum[i] = 11;
      break;
    case italianAlphabet[11]:
      charactersArrayNum[i] = 12;
      break;
    case italianAlphabet[12]:
      charactersArrayNum[i] = 13;
      break;
    case italianAlphabet[13]:
      charactersArrayNum[i] = 14;
      break;
    case italianAlphabet[14]:
      charactersArrayNum[i] = 15;
      break;
    case italianAlphabet[15]:
      charactersArrayNum[i] = 16;
      break;
    case italianAlphabet[16]:
      charactersArrayNum[i] = 17;
      break;
    case italianAlphabet[17]:
      charactersArrayNum[i] = 18;
      break;
    case italianAlphabet[18]:
      charactersArrayNum[i] = 19;
      break;
    case italianAlphabet[19]:
      charactersArrayNum[i] = 20;
      break;
    case italianAlphabet[20]:
      charactersArrayNum[i] = 21;
      break;
  }
}

console.log(charactersArrayNum);
console.log(charactersArray);
