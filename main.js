var highscores = [];

$(document).ready(function () {
    
    if (localStorage.highscores) {
        processScores();
    }

    setInterval(processScores, 5000);
});


function processScores() {
        highscores = JSON.parse(localStorage.highscores);
        
        // Sort the scores
        function SortByScore(a, b){
            var aScore = a[1];
            var bScore = b[1]; 
            return ((aScore > bScore) ? -1 : ((aScore < bScore) ? 1 : 0));
        }

        // Sort the highscores
        highscores.sort(SortByScore);
        
        // Clear our table
        $("#highscoreRows tr").remove();
        
        // Put in the new rows
        highscores.forEach(function(entry) {
            $('#highscoreRows').append('<tr><td>' + entry[0] + '</td><td>' + entry[1] + '</td></tr>');
        });
}