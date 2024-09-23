const scoreDisplay = document.querySelector("#score-board")
const playAgainBtn = document.querySelector("#play-again-button");
const score = localStorage.getItem('score');

scoreDisplay.textContent = score;

playAgainBtn.addEventListener("click",() => {
    window.location.href = "game.html";
})


