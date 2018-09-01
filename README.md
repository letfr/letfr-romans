# Converter algarismos romanos v.1.0.0

**Esta biblioteca se destina à conversão de números romanos.**
A partir de uma string contendo um número em algarismos romanos é retornado o número convertido para decimal. O contrário também é possível informando um decimal e obtendo como resposta uma string em algarismos romanos.


## Os métodos utilizados na biblioteca são:

#### **intToRoman(num);**
#### **romanToInt(str);**

Exemplo de uso:

```
$node
> let convert = require("letfr-romans")
> convert.intToRoman(30); //XXX
> convert.romanToInt("CD"); //400
```


## versão 1.0.0

- funcionalidades: converter um decimal para algarismo romano ou algarismo romano para decimal;
- pode retornar string ou int.


## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install letfr-romans`


## roadmap oficial do projeto

#### versão 1.0.0 (released)
- funcionalidades: converter um decimal para algarismo romano ou algarismo romano para decimal;
- pode retornar string ou int.