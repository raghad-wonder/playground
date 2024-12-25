// Initialize scores for Team A and Team B
let teamAScore = 0;
let teamBScore = 0;

// Get references to the HTML elements that display the scores
let teamAScoreValue = document.getElementById("teamAScore");
let teamBScoreValue = document.getElementById("teamBScore");

// Function to increment the score for a given team
let incrementScore = (team) => {
    if (team === "teamA") {
        teamAScore++;
        teamAScoreValue.textContent = teamAScore;
    } else if (team === "teamB") {
        teamBScore++;
        teamBScoreValue.textContent = teamBScore;
    }
};

// Function to decrement the score for a given team
let decrementScore = (team) => {
    if (team === "teamA" && teamAScore > 0) {
        teamAScore--;
        teamAScoreValue.textContent = teamAScore;
    } else if (team === "teamB" && teamBScore > 0) {
        teamBScore--;
        teamBScoreValue.textContent = teamBScore;
    }
};

