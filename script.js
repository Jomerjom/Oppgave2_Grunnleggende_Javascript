// Oppgave 1
// Lag et array med 10 elementer
// Fjern siste element med .pop
// Legg så til et nytt element i enden i arrayet med .push
console.log("Oppgave 1:");
let myArray1 = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
console.log(`Lager et array med 10 elementer: ${myArray1}`);
myArray1.pop();
myArray1.push("eleven");
console.log(
  `Fjerner siste element og legger til et nytt med pop og push: ${myArray1}`
);

// Oppgave 1 bonus
// Finn og utfør en god method for å ta ut element 3 og 7 fra arrayet
myArray1.splice(6, 1);
myArray1.splice(2, 1);
console.log(`Fjerner element nummer 3 og 7 med splice: ${myArray1}`);

// Oppgave 1.1
// Console.log elementet som ligger i index 5 ut i konsollen med tekst som sier: "dette er index 5: ".
console.log(`Dette er index 5: ${myArray1[5]}`);

// Oppgave 2
// Lag et array med 2 eller flere objekter i. Det skal minst være 3 keys i hvert objekt (f.eks firstName, lastName og age)
// BONUS! Legg til en key som inneholder et array (f.eks hobbies) med minst 3 elementer i
// console.log ut all informasjonen. En for hvert objekt (sånn at all informasjonen til et objekt kommer i en console.log

console.log("Oppgave 2:");
const players = [
  {
    characterName: "Tankadin",
    characterRace: "Human",
    characterClass: "Paladin",
    characterTalents: ["Protection", "Retribution", "Holy"],
  },
  {
    characterName: "Magus",
    characterRace: "Gnome",
    characterClass: "Mage",
    characterTalents: ["Arcane", "Fire", "Frost"],
  },
  {
    characterName: "Healerman",
    characterRace: "Human",
    characterClass: "Priest",
    characterTalents: ["Disc", "Holy", "Shadow"],
  },
];

console.log(`name: ${players[0].characterName}, Race: ${players[0].characterRace}, Class: ${players[0].characterClass}, Talent options: ${players[0].characterTalents}`);
console.log(`name: ${players[1].characterName}, Race: ${players[1].characterRace}, Class: ${players[1].characterClass}, Talent options: ${players[1].characterTalents}`);
console.log(`name: ${players[2].characterName}, Race: ${players[2].characterRace}, Class: ${players[2].characterClass}, Talent options: ${players[2].characterTalents}`);


// Oppgave 3 og 4
// Lag en logikk for en bedrift slik som vi har øvd på tidligere. LAG EN NY logikk, ikke bruk samme dere jobbet med på torsdag.
// Det skal være med if og else
// BONUS: Bruk if else minst 2 ganger
// console.log ut resultatet.
// Lag en funksjon som fungerer

console.log("Oppgave 3 + 4:");

function isEpost(x) {
    const epostSyntax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (epostSyntax.test(x)) {
        console.log(`${x} er en gyldig epostadresse`);
    } else {
        console.log(`${x} er ikke en gyldig epostadresse`);
    }
}

console.log(`lager array med epostadresser og tester om de er gyldige:`);
let epost = [
    "misterman@gmail.com",
    "test@xyz.ilk",
    "nah@gmailcom",
    "a@a.a",
    "xgmail.com",
    "pepefrog@pog.hello",
    " ",
];

for (let i = 0; i < epost.length; i++) {
    isEpost(epost[i]);
}

