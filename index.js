let numeroUm;
let numeroDois;
let input;
let mmc1;
let mmc2;

console.log('Olá. Iremos calcular o MMC dos números solicitados.');
console.log('Informe o primeiro número:');

process.stdin.on('data', function (data) {
    input = Number(data.toString().trim());

    if (!numeroUm) {
        numeroUm = input;
        console.log('Agora nos informe o segundo número:');
    } else {
        numeroDois = input;
        if (numeroUm > numeroDois) {
            mmc1 = numeroUm;
            mmc2 = numeroDois;
        } else {
            mmc1 = numeroDois;
            mmc2 = numeroUm;
        }

        for (let i = 1; i <= mmc1; i++) {
            for (let j = 1; j <= mmc2; j++) {
                if (mmc1 * i == mmc2 * j) {
                    console.log('O MMC dos números solicitados é', mmc1 * i);
                    process.exit();
                }
            }
        }
    }

})