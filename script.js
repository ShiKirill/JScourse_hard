"use strict";

const userString = prompt('Введите строку');

const strFunction = function(str){
  if (typeof str !== 'string') {
    return 'Переменная не является строкой';
  } else {
    str = str.trim();
    if (str.length > 30) {
      str = str.slice(0, 30) + '...';
    }
    return str;
  }
};

console.log(strFunction(userString));