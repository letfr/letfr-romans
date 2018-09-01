const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
function intToRoman(num){
  let result = "";
  for (let i in decimal) {
    while (num%decimal[i] < num) {     
      result += roman[i];
      num -= decimal[i];
    }
  }
  return result;
}
function romanToInt(str) {  
  let result = 0;
  for (let i in decimal) {
    while (str.indexOf(roman[i]) === 0){
      result += decimal[i];
      str = str.replace(roman[i],"");
    }
  }
  return result;
}

module.exports.intToRoman = intToRoman;
module.exports.romanToInt = romanToInt;