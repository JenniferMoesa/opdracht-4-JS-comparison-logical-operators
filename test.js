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

const isFemale = "male";

if (isFemale == "female") {
    document.write(true);

} else {
    document.write(false);
}

const driverStatus = "bob";

if (driverStatus == "bob") {
    document.write("Je mag rijden.");

} else {
    document.write("Je mag niet rijden.");
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
