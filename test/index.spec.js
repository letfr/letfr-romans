var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
const convert = require('../index');

describe('intToRoman()', function() {
  it('Deve lançar um erro', () => {
    expect(() => convert.intToRoman()).to.throws('Está faltando parâmetro!');
    expect(() => convert.intToRoman("")).to.throws('Está faltando parâmetro!');
  });
  it('Deve lançar um erro', () => {
    expect(() => convert.intToRoman(0)).to.throws('Não existe 0 em algarismos romanos!');
  });  
  it('Deve lançar um erro', () => {
    expect(() => convert.intToRoman("abc")).to.throws('Digite apenas números!');
  });  
  it('Deve receber uma string e retornar um int', () => {
    expect(convert.intToRoman(6), 'VI');
  });
  it('Deve receber uma string e retornar um int', () => {
    expect(convert.intToRoman(400), 'CD');
  });
  it('Deve receber uma string e retornar um int', () => {
    expect(convert.intToRoman(900), 'CM');
  });
  it('Deve receber uma string e retornar um int', () => {
    expect(convert.intToRoman(2051), 'MMLI');
  });
  it('Deve receber uma string e retornar um int', () => {
    expect(convert.intToRoman(198), 'CXCVIII');
  });
});
describe('romanToInt()', function() {
  it('Deve lançar um erro', () => {
    expect(() => convert.romanToInt()).to.throws('Está faltando parâmetro!');
    expect(() => convert.romanToInt("")).to.throws('Está faltando parâmetro!');
  });
  it('Deve lançar um erro', () => {
    expect(() => convert.romanToInt(1234)).to.throws('Digite uma string!');
  }); 
  it('Deve receber um int e retornar uma string', () => {
    expect(convert.romanToInt('LXXXVIII'), 88);
  });
  it('Deve receber um int e retornar uma string', () => {
    expect(convert.romanToInt('LII'), 52);
  });
  it('Deve receber um int e retornar uma string', () => {
    expect(convert.romanToInt('DC'), 600);
  });
  it('Deve receber um int e retornar uma string', () => {
    expect(convert.romanToInt('CCCLXV'), 365);
  });
  it('Deve receber um int e retornar uma string', () => {
    expect(convert.romanToInt('DCXCII'), 7692);
  });
});
