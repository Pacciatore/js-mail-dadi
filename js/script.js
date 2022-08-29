// Dichiarazione variabili

let throwNum = 0;

let dice1Wins = 0;
let dice2Wins = 0;

throwNum = parseInt(prompt('Inserire numero di lanci da effettuare:'));

for (let i = 0; i < throwNum; i++) {

    console.log('---------------')
    console.log('Numero lancio: ' + (i + 1));

    const dice1 = Math.floor((Math.random() * 6) + 1);
    console.log(dice1);

    const dice2 = Math.floor((Math.random() * 6) + 1);
    console.log(dice2);

    if (dice1 > dice2) {
        console.log('Vince Dado 1!');
        dice1Wins++;
    } else if (dice2 > dice1) {
        console.log('Vince Dado 2!');
        dice2Wins++;
    } else {
        console.log('Pareggio!');
    }

}

console.log('---------------');
console.log(`Numero vittorie Dado 1: ${dice1Wins}`);
console.log(`Numero vittorie Dado 2: ${dice2Wins}`);
console.log(`Numero pareggi: ${throwNum - dice1Wins - dice2Wins}`);