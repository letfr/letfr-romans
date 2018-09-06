const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
function intToRoman(num) {
  if (num === "" || num === undefined) {
    throw new Error("Está faltando parâmetro!");
  } else if (num === 0) {
    throw new Error("Não existe 0 em algarismos romanos!");
  } else if (typeof num !== "number") {
    throw new Error("Digite apenas números!");
  } else {
    let result = "";
    decimal.forEach((elem, index) => {
      while (num % elem < num) {
        result += roman[index];
        num -= elem;
      }
    });
    return result;
  }
}
function romanToInt(str) {
  if (str === "" || str === undefined) {
    throw new Error("Está faltando parâmetro!");
  } else if (typeof str !== "string") {
    throw new Error("Digite uma string!");
  } else {
    let result = 0;
    roman.forEach((elem, index) => {
      while (str.indexOf(elem) === 0) {
        result += decimal[index];
        str = str.replace(elem, "");
      }
    });
    return result;
  }
}
module.exports.intToRoman = intToRoman;
module.exports.romanToInt = romanToInt;