$(document).ready(function () {

    var pcNumbers = randomPcNumbers();
    alert(pcNumbers);
    setTimeout(function() {
        playGame(pcNumbers);
    },5000);
    
});
