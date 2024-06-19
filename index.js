let resultado;
let numeroUm;
let numeroDois;
let input;

console.log('Olá. Iremos calcular o MMC dos números solicitados.');
console.log('Informe o primeiro número:');

process.stdin.on('data', function (data) {
    input = Number(data.toString().trim());

    if (!numeroUm) {
        numeroUm = input;
        console.log('Agora nos informe o segundo número:');
    } else {
        numeroDois = input;
        console.log(numeroUm, numeroDois);
        process.exit();
    }

})