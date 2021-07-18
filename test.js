//DEEL 1

const age = 18;

if (age >= 18) {
  console.log("Je bent 18 jaar of ouder, je mag naar binnen");
} else {
  console.log("Je bent te jong. Je mag helaas niet naar binnen");
}

if (age >= 18 && age <= 25) {
  console.log("Je bent tussen de 18 en 25 jaar. Je krijgt 50% korting op bier.");
}

const isFemale = true;
if (isFemale) {
  console.log("Je ticket zegt dat je een vrouw bent!");
} else {
  console.log(
    "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
  );
}

const driverStatus = "bob";
if (driverStatus === "bob") {
  console.log("Je bent de bob, je mag autorijden");
} else {
  console.log("Je bent geen bob, hier met die autosleutels");
}

//DEEL 2
const name = "Sarah";
if (name === "Sarah" || name === "Bram") {
  console.log("Je heet Sarah of Bram, je krijgt gratis bier.");
} else {
  console.log("Je heet geen Sarah of Bram. Je krijgt helaas geen gratis bier.");
}

//DEEL 3
const totalAmount = 25;
if (totalAmount >= 100) {
  console.log("Je hebt meer dan 100 euro uitgegeven. Je krijgt gratis champagne.");
} else if (totalAmount > 50) {
  console.log("Je hebt meer dan 50 euro uitgegeven. Je krijgt gratis nachos.");
} else if (totalAmount > 25) {
  console.log("Je hebt meer dan 25 euro uitgegeven. Je krijgt gratis vegan bitterballen. ");
} else {
  console.log("Je hebt minder dan 25 euro uitgegeven.");
}
