const inputNumber = prompt("Enter namber: ");
console.log(...inputNumber);
const inputNumberArray = [];
inputNumberArray.push(...inputNumber);
console.log(inputNumberArray);
const units = {
    "0": "гривен",
    "1": "одна гривна",
    "2": "две гривны",
    "3": "три гривны",
    "4": "четыре гривны",
    "5": "пять гривен",
    "6": "шесть гривен",
    "7": "семь гривен",
    "8": "восемь гривен",
    "9": "девять гривен"
};
const tens = {
    "10": "десять",
    "11":"одинадцать",
    "12":"двенадцать",
    "13":"тринадцать",
    "14":"четырнадцать",
    "15":"петнадцать",
    "16":"шеснадцать",
    "17":"семнадцать",
    "18":"восемнадцать",
    "19":"девятнадцать",

    "2": "двадцать",
    "3": "тридцать",
    "4": "сорок",
    "5": "пятьдесят",
    "6": "шестьдесят",
    "7": "семьдесят",
    "8": "восемьдесят",
    "9": "девяносто"
}
const hundreds = {
    "1": "сто",
    "2": "двести",
    "3": "триста",
    "4": "четыреста",
    "5": "пятьсот",
    "6": "шестьсот",
    "7": "семьсот",
    "8": "восемьсот",
    "9": "девятьсот",
}
let unitKey = inputNumberArray[inputNumberArray.length-1];
let tensKey = inputNumberArray[inputNumberArray.length-2];
if (tensKey === "1"){
    tensKey = inputNumberArray[inputNumberArray.length-2] + inputNumberArray[inputNumberArray.length-1];
    unitKey = "0"
}
const hundredsKey = inputNumberArray[inputNumberArray.length-3];
let result = [hundreds[hundredsKey], tens[tensKey], units[unitKey]];
if (inputNumberArray.length > 3){
    result = "Error! Please enter a number between 0 and 999 (inclusive).";
    console.log(result);
} else {
    console.log(result.join(" "));
}
