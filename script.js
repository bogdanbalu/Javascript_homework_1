console.log("Returnează un boolean dacă un număr este divizibil cu 10");
const DEVID = 10;
const DIVISIBLE = 100;

const isDivisible = (number, devid ) => {
    return number % devid === 0;
}

const result = isDivisible(DIVISIBLE, DEVID);
console.log(result);

console.log("--------------------------------------------------------------");

console.log("Scrieți o funcție numită tellFortune");

const numberOfChildren = 3;
const partnerName = "Oana";
const location = "Sibiu";
const job = "Software Developer";

const tellFortune = (numberOfChildren,partnerName, location, job ) => {
    return `Vei fi un: ${job}, în: ${location}, căsătorit cu: ${partnerName}, și vei avea: ${numberOfChildren} copii`;
}

const resultTellFortune = tellFortune(numberOfChildren, partnerName, location, job);
console.log(resultTellFortune);

console.log("--------------------------------------------------------------");

console.log("Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii");

const currentDayNumber = 1;

const getCurrentDay = (currentDay) => {
    switch(currentDay) {
        case 1: {
            return "Mondey"
        }
        case 2: {
            return "Tuesday"
        }
        case 3: {
            return "Wednesday"
        }
        case 4: {
            return "Thursday"
        }
        case 5: {
            return "Friday"
        }
        case 6: {
            return "Saturday"
        }
        case 7: {
            return "Sunday"
        }  
    }
}
 const currentDay = getCurrentDay(currentDayNumber);
 console.log(`The current day is: ${currentDay}`);