function RandomPcNumbers(){
    var pcNumbers = [];
    for (var i = 0; i < 5 ; i++){
    var random = Math.floor(Math.random() * 101);
    pcNumbers.push(random);
}
    alert(pcNumbers);
    return pcNumbers;
}

function userInsertNumbers(pcNumbers){
    var userNumbers = [];
    for (var i = 0; i < 5 ; i++){
        userNumbers.push(prompt('Inserisci in ORDINE i numeri visti in precedenza'));
        console.log(userNumbers);
    }
    for(var i = pcNumbers.length; i--;) {
        if( pcNumbers[i] == userNumbers[i] )
         console.log('Ti sei ricordato ' + userNumbers[i]);
         else {
             console.log('Hai confuso ' + userNumbers[i] + ' con ' + pcNumbers[i]);
         }
     }
}
