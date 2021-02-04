"use strict";

function isNumber(n){
  return (!isNaN(parseFloat(n)) && isFinite(n));
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function game(){
  let botNumber =  getRandomInt(1, 100);
    function gameProgress() {
        let userNumber = prompt('Угадай число от 1 до 100');
        if (isNumber(userNumber)){
          if (+userNumber>botNumber) {
            let check = confirm ('Загаданное число меньше. Хотите продолжить?');
            if (check) {
              gameProgress();
            } else {
              return alert('Игра окончена');
            }
          } else if (+userNumber<botNumber) {
            let check = confirm ('Загаданное число больше. Хотите продолжить?');
            if (check) {
              gameProgress();
            } else {
              return alert('Игра окончена');
            }
          } else {
            return alert('Поздравляю, вы угадали!!!');
          }
      } else {
        let check = confirm('Введи число!');
        if (check) {
          gameProgress();
        } else {
          return alert('Игра окончена');
        }
      }
    }

  gameProgress();
}

game();