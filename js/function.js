function randomPcNumbers() {
    var pcNumbers = [];
    while(pcNumbers.length < 5){
        var r = Math.floor(Math.random() * 100) + 1;
        if(!pcNumbers.includes(r)) pcNumbers.push(r);
    }
    return pcNumbers;
}


function playGame(pcNumbers) {
    var userNumbers = [];
    var inserisciNumero = 'Inserisci un numero';
    var numeroValido = "Inserisci un numero Valido!";
    var numeroDuplicato = "Niente duplicati!";
    for (var i = 0; i < pcNumbers.length; i++) {
        var numberValid = false;
        var strDaMostrare = inserisciNumero;
        while (numberValid == false) {
            var number = parseInt(prompt(strDaMostrare));
            if (!isNaN(number) && !userNumbers.includes(number)) {
                numberValid = true;
            } else {
                if (isNaN(number)) {
                    strDaMostrare = numeroValido;
                } else if (userNumbers.includes(number)) {
                    strDaMostrare = numeroDuplicato;
                }
                numberValid = false;
            }
        }
        userNumbers.push(number);
        (userNumbers[i] == pcNumbers[i]) ? console.log('Ti sei ricordato ' + pcNumbers[i]): console.log('Hai confuso ' + userNumbers[i] + ' con ' + pcNumbers[i]);
    }
}