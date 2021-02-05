"use strict";

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let date = new Date();
let today = date.getDay()-1 ;
if (today <0) {today = 6;
}

for (let i=0 ; i < week.length ; i++){
    let div = document.createElement('div');
    if (today === i) {
        if (today < week.length-2){
            div.innerHTML = `<b>${week[i]}</b>`;
        } else {
            div.innerHTML = `<b><i>${week[i]}</i></b>`;
        }
        document.body.append(div);
    } else if (i < week.length-2){
        div.innerHTML = `${week[i]}`;
        document.body.append(div);
    } else {
        div.innerHTML = `<i>${week[i]}</i>`;
        document.body.append(div);
    }
}
// 
//     
