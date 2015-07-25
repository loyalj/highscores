var highscores = [];

$(document).ready(function () {

    if (localStorage.highscores) {
        // de-JSON our scores
        highscores = JSON.parse(localStorage.highscores);
        
        // Clear our table
        $("#highscoreRows tr").remove();
        
        // Put in the new rows
        scoreIndex = 0;
        highscores.forEach(function(entry) {
            $('#highscoreRows').append('<tr><td>' + entry[0] + '</td><td>' + entry[1] + '</td><td class="scoreIndex" data-index="' + scoreIndex + '">remove</td></tr>');
            scoreIndex++;
        });
    }
    
    $('.scoreIndex').on('click', removePlayer);
    $('#addPlayerButton').on('click', savePlayer);
});


function savePlayer() {
    var playerName = $('#playerName').val().trim();
    var playerScore = parseInt($('#playerScore').val());
    
    if((playerName == '') || (playerScore <= 0)) {
        alert('player not added!');
        return;
    }

    highscores.push([playerName, playerScore]);
    localStorage.highscores = JSON.stringify(highscores);

    $('#playerName').val('');
    $('#playerScore').val('');
    location.reload();
}

function removePlayer() {
    var playerIndex = parseInt($(this).attr('data-index'));
    highscores.splice(playerIndex, 1);
    localStorage.highscores = JSON.stringify(highscores);
    location.reload();
}