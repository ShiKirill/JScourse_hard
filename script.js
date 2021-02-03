"use strict";

function isPrime(num){
  for (let i = 2; i < +num; i++){
    if ((+num % i) === 0){
      return false;
    }
  }
  return true;
}

let arr = ['24512', '12313', '431231', '51231', '25151', '951819', '125123'];

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