if (sessionStorage.getItem('playerScore') === null || sessionStorage.getItem('computerScore') === null) {
    sessionStorage.setItem('playerScore', 0);
    sessionStorage.setItem('computerScore', 0);
}

// Fetch scores from sessionStorage
let playerScore = parseInt(sessionStorage.getItem('playerScore'));
let computerScore = parseInt(sessionStorage.getItem('computerScore'));

// Display the scores on the page
document.getElementById("playerScoreDisplay").textContent = playerScore;
document.getElementById("computerScoreDisplay").textContent = computerScore;

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "TIE UP";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOST";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOST";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOST";
                break;
        }
    }

    if (result === "YOU WIN") {
        playerScore++;
    } else if (result === "YOU LOST") {
        computerScore++;
    }

    // Store updated scores in sessionStorage
    sessionStorage.setItem('playerScore', playerScore);
    sessionStorage.setItem('computerScore', computerScore);

    // Store choices and result in sessionStorage
    sessionStorage.setItem('playerChoice', playerChoice);
    sessionStorage.setItem('computerChoice', computerChoice);
    sessionStorage.setItem('result', result);

    // Navigate to result page
    window.location.href = 'result.html';
}
document.getElementById('rul').addEventListener('click', function() {
    var rulesSection = document.getElementById('rulesSection');
    var rulesBox = document.getElementById('rulesBox');

    // Toggle visibility
    if (rulesSection.style.display === 'none') {
        rulesSection.style.display = 'block';
        rulesBox.style.display = 'block';
    } else {
        rulesSection.style.display = 'none';
        rulesBox.style.display = 'none';
    }
});