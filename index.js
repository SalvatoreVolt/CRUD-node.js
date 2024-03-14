const expressfunc = require('express');
const server = expressfunc();

server.get('/', (req, res ) => {
    res.send('hello world');
});

server.get('/p', (req, res ) => {
    res.send('pie');
});

server.put('/p', (req, res ) => {
    res.send('pie ta on');
});

server.listen(300);

//server.get('/a', function servidor(){});
//const = constante
//let = variavel
//parametros entre paranteses

function soma(a, b){
    return a+b;
};  


const valordafuncao = soma(1, 2);
//console.log("valor=",valordafuncao);


const somaDeNumeros = (a, b) => {
    return a + b;
}
const valorDaFuncao2 = somaDeNumeros(2,3);
//console.log("valor=",valorDaFuncao2);


let a = 3;
const b = a + 5;
console.log("valor=", b);


a = 10;
//console.log(a);


