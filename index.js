'use strict';

let secretNumber = Math.trunc(Math.random() * 30) + 1;
// secretNumber = 30;
let highScore = 0;
let score = 20;
// console.log(secretNumber);

//massge function for all display messages.
let displayMassage = function (message) {
    document.querySelector('.message').textContent = message;
};

//adding event listener to check btn
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.input').value);
    if (!guess) {
        displayMassage('Input a Number');

        //when guess is correct
    } else if (guess === secretNumber) {
        displayMassage('CORRECT✔✔ Good Job');
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.display-screen').textContent = `${secretNumber} 🏆`;
        document.querySelector('.display-screen').style.backgroundColor = 'yellow';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore-value').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMassage(guess > secretNumber ? '📈Too High' : '📉Too Low');
            score--;
            document.querySelector('.score-initial').textContent = score;
        } else {

            displayMassage('You Lost all Guess😞😢');
            document.querySelector('.display-screen').textContent = 'Hit Restart Button to Try again..';
            document.querySelector('.score-initial').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'blue';
        }

    };


});

//resart game button

document.querySelector('.Reset').addEventListener('click', function () {
    score = 20;
    displayMassage('Check Again');
    document.querySelector('body').style.backgroundColor = ' rgb(32, 43, 40)';
    document.querySelector('.display-screen').textContent = `What's My Secret Number 💭💭?`;
    document.querySelector('.display-screen').style.backgroundColor = 'red';
    document.querySelector('.highscore-value').textContent = highScore;
    document.querySelector('.score-initial').textContent = 20;
    document.querySelector('.input').value = '';
});
