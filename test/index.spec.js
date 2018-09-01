var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
const convert = require('../index');

describe('intToRoman()', function() {
  it('Deve lançar um erro', () => {
    assert(convert.intToRoman(), 'Está faltando parâmetro!');
    assert(convert.intToRoman(""), 'Está faltando parâmetro!');
  });
  it('Deve lançar um erro', () => {
    assert(convert.intToRoman(0), 'Não existe 0 em algarismos romanos!');
  });  
  it('Deve lançar um erro', () => {
    assert(convert.intToRoman("abc"), 'Digite apenas números!');
  });  
  it('Deve receber uma string e retornar um int', () => {
    assert(convert.intToRoman(6), 'VI');
  });
  it('Deve receber uma string e retornar um int', () => {
    assert(convert.intToRoman(400), 'CD');
  });
  it('Deve receber uma string e retornar um int', () => {
    assert(convert.intToRoman(900), 'CM');
  });
  it('Deve receber uma string e retornar um int', () => {
    assert(convert.intToRoman(2051), 'MMLI');
  });
  it('Deve receber uma string e retornar um int', () => {
    assert(convert.intToRoman(198), 'CXCVIII');
  });
});
describe('romanToInt()', function() {
  it('Deve lançar um erro', () => {
    assert(convert.romanToInt(), 'Está faltando parâmetro!');
    assert(convert.romanToInt(""), 'Está faltando parâmetro!');
  });
  it('Deve lançar um erro', () => {
    assert(convert.romanToInt(1234), 'Digite apenas letras!');
  }); 
  it('Deve receber um int e retornar uma string', () => {
    assert(convert.romanToInt('LXXXVIII'), 88);
  });
  it('Deve receber um int e retornar uma string', () => {
    assert(convert.romanToInt('LII'), 52);
  });
  it('Deve receber um int e retornar uma string', () => {
    assert(convert.romanToInt('DC'), 600);
  });
  it('Deve receber um int e retornar uma string', () => {
    assert(convert.romanToInt('CCCLXV'), 365);
  });
  it('Deve receber um int e retornar uma string', () => {
    assert(convert.romanToInt('DCXCII'), 7692);
  });
});
