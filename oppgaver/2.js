/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

const getNumberParity = num => (num % 2 === 0 ? 'Partall' : 'Oddetall');

console.log(getNumberParity(10)); // Partall
console.log(getNumberParity(3)); // Oddetall

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

const makeLoud = str => str.toUpperCase() + '!';

console.log(makeLoud('Dette er kult')); // DETTE ER KULT!

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

function greet(name, hour) {
  if (typeof hour !== 'number' || hour > 23 || hour < 0) {
    return 'Det ser ut til at du har skrevet inn et ugyldig tid';
  }

  if (hour <= 5) return `God natt, ${name}!`;
  if (hour <= 11) return `God morgen, ${name}!`;
  if (hour <= 17) return `God dag, ${name}!`;

  return `God kveld, ${name}!`;
}

console.log(greet('Max', 4)); // God natt, Max!
console.log(greet('Max', 10)); // God morgen, Max!
console.log(greet('Max', 15)); // God dag, Max!
console.log(greet('Max', 20)); // God kveld, Max!

// Det ser ut til at du har skrevet inn et ugyldig tid
console.log(greet('Max'));
console.log(greet('Max', 25));
console.log(greet('Max', '10'));

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

const trimEdges = arr => arr.slice(1, -1);

console.log(trimEdges(['Rød', 'Grønn', 'Blå', 'Gul'])); // ['Green', 'Blue']
console.log(trimEdges(['En', 'To', 'Tre', 'Fire', 'Fem', 'Seks'])); // ['To', 'Tre', 'Fire', 'Fem']

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

const updateString = str => str.replace('vanskelig', 'gøy').trim();

console.log(updateString('  Javascript er vanskelig   ')); // "Javascript er gøy"
console.log(updateString(' Det er vanskelig å bruke metoder ')); // "Det er gøy å bruke metoder"
console.log(updateString('   vanskelig        ')); // "gøy"

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ['Bok', 'Penn', 'Notatbok', 'Viskelær', 'Blyant', 'Markør'];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Steg 1:
items.shift();

// Steg 2:
items.indexOf('Viskelær') !== -1
  ? (items[items.indexOf('Viskelær')] = 'Linjal')
  : items[items.indexOf('Linjal')];

// Steg 3:
items.splice(0, 2, 'Markeringspenn');

// Steg 4:
const combinedString = items.join(' | ');

// Ekstra utfordring:
const itemsWithE = items.filter(i => i.toLowerCase().includes('e'));

console.log(items); // [ 'Markeringspenn', 'Linjal', 'Blyant', 'Markør' ]
console.log(combinedString); // "Markeringspenn | Linjal | Blyant | Markør"
console.log(itemsWithE); // [ 'Markeringspenn' ]
/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

const updateArray = (arr, str) =>
  arr.includes(str) ? arr.filter(i => i !== str) : [...arr, str];

console.log(updateArray(['Rød', 'Grønn'], 'Blå')); // ['Rød', 'Grønn', 'Blå']
console.log(updateArray(['Rød', 'Grønn', 'Blå'], 'Grønn')); // ['Rød', 'Blå']
console.log(updateArray(['En', 'To', 'Tre'], 'Fire')); // ['En', 'To', 'Tre', 'Fire']
console.log(updateArray(['En', 'To', 'Tre'], 'To')); // ['En', 'Tre']

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

const decoratePrimitive = (param, emoji = '😎') => {
  const wrap = content => `${emoji} ${content} ${emoji}`;

  const handlers = {
    string: x => wrap(x),
    number: x => wrap(x * 2),
    boolean: x => wrap(x ? 'Ja' : 'Slapp av')
  };

  const handler = handlers[typeof param];

  return handler ? handler(param) : wrap('Kun primitive verdier');
};

console.log(decoratePrimitive('Hei')); // 😎 Hei 😎
console.log(decoratePrimitive(21)); // 😎 42 😎
console.log(decoratePrimitive(true)); // 😎 Ja 😎
console.log(decoratePrimitive(false)); // 😎 Slapp av 😎
console.log(decoratePrimitive({})); // 😎 Kun primitive verdier 😎
