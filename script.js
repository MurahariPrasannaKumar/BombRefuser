let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");


defuserEl.addEventListener("keydown", function(event) {
    let bombDefuserText = defuserEl.value;
    console.log(bombDefuserText);

    if(event.key === "Enter" && bombDefuserText ==="defuse" && countDown !== 0) {
        timerEl.textContent = "You did it!!";
        clearInterval(intervalId);
    }
});
let countDown = 10;
let intervalId = setInterval(function() {
    countDown = countDown - 1;
    timerEl.textContent = countDown;
    if(countDown === 0) {
        timerEl.textContent = "Boom!!!";
        clearInterval(intervalId);
    }
},1000);