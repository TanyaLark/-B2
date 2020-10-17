const button = document.getElementById("button_enter");
button.addEventListener("click", function () {
  const inputNumber = document.getElementById("input_value").value;
  if (inputNumber === "") {
    document.getElementById("outputWords").value =
      "Error!!!Please enter a number.";
  } else {
    const resultWords = FromNumberToWord(inputNumber);
    document.getElementById("outputWords").value = resultWords;
  }
});

const buttonClear = document.getElementById("button_clear");
buttonClear.addEventListener("click", function () {
  document.getElementById("input_value").value = "";
  document.getElementById("outputWords").value = "";
});

function FromNumberToWord(inputNumber) {
  const inputNumberArray = [];
  inputNumberArray.push(...inputNumber);
  const regularExpression = /^[0-9]/;
  if (inputNumberArray.length > 3 || !regularExpression.test(inputNumber)) {
    return "Error! Please enter a number between 0 and 999 (inclusive).";
  } else if (inputNumberArray.length === 1 && inputNumberArray[0] === "0") {
    return "ноль гривен";
  }
  const units = {
    0: "гривен",
    1: "одна гривна",
    2: "две гривны",
    3: "три гривны",
    4: "четыре гривны",
    5: "пять гривен",
    6: "шесть гривен",
    7: "семь гривен",
    8: "восемь гривен",
    9: "девять гривен",
  };
  const tens = {
    10: "десять",
    11: "одинадцать",
    12: "двенадцать",
    13: "тринадцать",
    14: "четырнадцать",
    15: "пятнадцать",
    16: "шестнадцать",
    17: "семнадцать",
    18: "восемнадцать",
    19: "девятнадцать",
    2: "двадцать",
    3: "тридцать",
    4: "сорок",
    5: "пятьдесят",
    6: "шестьдесят",
    7: "семьдесят",
    8: "восемьдесят",
    9: "девяносто",
  };
  const hundreds = {
    1: "сто",
    2: "двести",
    3: "триста",
    4: "четыреста",
    5: "пятьсот",
    6: "шестьсот",
    7: "семьсот",
    8: "восемьсот",
    9: "девятьсот",
  };
  let wordUnit;
  let wordTen;
  let wordHundred;
  inputNumberArray.reverse();
  for (let i = 0; i < inputNumberArray.length; i++) {
    let objectKey = inputNumberArray[i];
    switch (i) {
      case 0:
        wordUnit = units[objectKey];
        break;
      case 1:
        if (inputNumberArray[1] === "1") {
          objectKey += inputNumberArray[0];
          wordTen = tens[objectKey];
          wordUnit = units["0"];
        } else {
          wordTen = tens[objectKey];
        }
        break;
      case 2:
        wordHundred = hundreds[objectKey];
        break;
      default:
        break;
    }
  }
  let result = [wordHundred, wordTen, wordUnit];
  result = result.filter(function (element) {
    //return element ? true : false; // тернарный оператор отсекает underfind, 0, null
    if (element !== undefined) {
      return true;
    } else { 
      return false; 
    }
  })
  return result.join(" ");
}
