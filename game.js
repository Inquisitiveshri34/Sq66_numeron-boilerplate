const gt = document.querySelector("#greater-than");
const eq = document.querySelector("#equal-to");
const lt = document.querySelector("#lesser-than");
const n1 = document.querySelector("#number1");
const n2 = document.querySelector("#number2");
const t0 = document.querySelector("#timer")

let score = 0;

// Iteration 2: Generate 2 random number and display it on the screen

let numberChange = () => {
    let number1 = Math.floor(Math.random() * 100);
    let number2 = Math.floor(Math.random() * 100);
    
    n1.textContent = number1;
    n2.textContent = number2;
}

// Iteration 3: Make the options button functional

gt.addEventListener("click",() => {
    (n1.textContent > n2.textContent) ? score++ : score;
    console.log(score);
});
gt.addEventListener("click",numberChange)

eq.addEventListener("click",() => {
    (n1.textContent == n2.textContent) ? score++ : score;
    console.log(score);
});
eq.addEventListener("click",numberChange)

lt.addEventListener("click",() => {
    (n1.textContent < n2.textContent) ? score++ : score;
    console.log(score);
});
lt.addEventListener("click",numberChange)


// Iteration 4: Build a timer for the game

let secondsElapsed = 10;

const timerInterval = setInterval(() => {
    secondsElapsed--;
    document.getElementById('timer').innerText = `${secondsElapsed}`;

    // Stop the timer after 10 seconds
    if (secondsElapsed == 0) {
        clearInterval(timerInterval);
        window.location.href = "gameover.html";
        localStorage.setItem('score', score);
    }
}, 1000);


