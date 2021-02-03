"use strict";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function isPrime(num){
  for (let i = 2; i < +num; i++){
    if ((+num % i) === 0){
      return false;
    }
  }
  return true;
}

let arr = [];

for (let i = 0; i< 7; i++){
  arr[i] = String(getRandomInt(1500, 20000));
}

let tmp = 0;
for (let i=0; i<7; i++){
  if (arr[i][0] ==='2' || arr[i][0] ==='4') {
    console.log(arr[i]);
    tmp++;
  }
}

if (tmp===0){
  console.log('Таких чисел нет');
}

console.log('Простые числа: ');
for (let i = 2; i <= 100; i++){
  if (isPrime(i)) {
    console.log(i + ` Делители данного числа: 1 и ${i}`);
  }
}