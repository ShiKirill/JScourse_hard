// const num = 266219;

// let tmp = num;
// let result = 1;
// while (tmp>0){
//  result *= tmp%10;
//  tmp= Math.floor(tmp/10);
// }
// console.log(result);

// result = result**3;

// console.log(result.toString().substr(0,2));

let lang = '';
let weekStr = '';
let langCheck;
let weekRus = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let weekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let arr = [
 ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
 ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
];

do{
 lang = prompt('Выберите язык (ru/en)').toLowerCase();
 langCheck = (lang === 'ru') || (lang === 'en');
} while (langCheck === false);

//a
if (lang === 'ru') {
 for (let day of weekRus) {
  weekStr+= day + ", ";
}
}
else {
 for (let day of weekEn) {
  weekStr+= day + ", ";
 }
}

weekStr = weekStr.substr(0, weekStr.length-2);
console.log(weekStr + ' (Через if)');
weekStr = '';

//b
switch(lang){
 case 'ru': for (let day of weekRus) {
  weekStr+= day + ", ";
}
 break;
 case 'en': for (let day of weekEn) {
  weekStr+= day + ", ";
 }
 break;
}

weekStr = weekStr.substr(0, weekStr.length-2);
console.log(weekStr + ' (Через switch-case)');
weekStr = '';

//c
let i = (lang==='ru') ? 0 : 1;
for (let j = 0; j < arr[i].length; j++) {
 weekStr += arr[i][j] + ", ";
}

weekStr = weekStr.substr(0, weekStr.length-2);
console.log(weekStr + ' (Через многомерный массив)');

let namePerson = prompt('Введите имя');
namePerson = namePerson[0].toUpperCase() + namePerson.slice(1);

let position = (namePerson === 'Артем') ? 'директор' :
 (namePerson === 'Максим') ? 'преподаватель' :
 'студент';
console.log(position);