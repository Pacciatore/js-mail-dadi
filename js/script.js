// Dichiarazione variabili

let throwNum = 0;

throwNum = parseInt(prompt('Inserire numero di lanci da effettuare:'));

for (let i = 0; i < throwNum; i++) {

    console.log('Numero lancio: ' + (i + 1));

    const dice1 = Math.floor((Math.random() * 6) + 1);
    console.log(dice1);

    const dice2 = Math.floor((Math.random() * 6) + 1);
    console.log(dice2);

    if (dice1 > dice2) {
        console.log('Vince Dado 1!');
    } else if (dice2 > dice1) {
        console.log('Vince Dado 2!');
    } else {
        console.log('Pareggio!');
    }

}