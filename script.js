"use strict";

function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.createElem = function() {
        if (selector[0] === '.') {
            const div = document.createElement('div');
            div.classList.add(selector.slice(1));
            div.style.cssText = 'height:' + this.height + ';width:' + this.width + ';background-color:' + this.bg + ';font-size:'+ this.fontSize+';';
            div.textContent = 'Hello world!';
            document.body.append(div);
        } else if (selector[0] === '#') {
            const p = document.createElement('p');
            p.id = selector.slice(1);
            p.style.cssText = 'height:' + this.height + ';width:' + this.width + ';background-color:' + this.bg + ';font-size:'+ this.fontSize+';';
            p.textContent = 'Hello world!';
            document.body.append(p);
        } else {
            console.log('Ошибка в selector!');
        }
    };
}

let newObject = new DomElement('.block', '200px', '500px', '#aa2812','24px');

newObject.createElem();