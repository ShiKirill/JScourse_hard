"use strict";

const hourEnding = function (k) {
    if (k % 10 === 1 && k !== 11) {
        return 'час';
    } else if ((k < 10 || k > 20) && (k % 10 >= 2 && k % 10 <= 4)) {
        return 'часа';
    } else {
        return 'часов';
    }
};

const minutedEnding = function (k) {
    if (k % 10 === 1 && k !== 11) {
        return 'минута';
    } else if ((k < 10 || k > 20) && (k % 10 >= 2 && k % 10 <= 4)) {
        return 'минуты';
    } else {
        return 'минут';
    }
};

const secondEnding = function (k) {
    if (k % 10 === 1 && k !== 11) {
        return 'секунда';
    } else if ((k < 10 || k > 20) && (k % 10 >= 2 && k % 10 <= 4)) {
        return 'секунды';
    } else {
        return 'секунд';
    }
};

const addZero = function (k) {
    if (k / 10 < 1) {
        return '0' + k;
    } else {
        return k;
    }
};

const week = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
];
const month = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
];

setInterval(function () {
    document.body.innerHTML = '';
    const date = new Date();
    let today = date.getDay() - 1;
    if (today < 0) {
        today = 6;
    }
    const currentMonthDay = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const fullStr = 'Сегодня ' + week[today] + ', ' + currentMonthDay + ' ' + month[currentMonth] + ' ' + currentYear + ' года, ' + hours + ' ' + hourEnding(hours) + ' ' + minutes + ' ' + minutedEnding(minutes) + ' ' + seconds + ' ' + secondEnding(seconds);
    const shortStr = addZero(currentMonthDay) + '.' + addZero(currentMonth) + '.' + currentYear + ' - ' + addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
    const strType = [fullStr, shortStr];

    let div = [];
    for (let i = 0; i < 2; i++) {
        div[i] = document.createElement('div');
        div[i].innerHTML = strType[i];
        document
            .body
            .append(div[i]);
    }
}, 1000);