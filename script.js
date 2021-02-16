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
            
            document.body.append(div);
        } else if (selector[0] === '#') {
            const p = document.createElement('p');
            p.id = selector.slice(1);
            p.style.cssText = 'height:' + this.height + ';width:' + this.width + ';background-color:' + this.bg + ';font-size:'+ this.fontSize+';';
            
            document.body.append(p);
        } else {
            console.log('Ошибка в selector!');
        }
    };
}
DomElement.prototype.moveObject = function(){
    const object = document.querySelector(this.selector);
    object.style.cssText += 'position: absolute;';
    let right = 0;
    let bottom = 0;
    document.addEventListener('keydown', function(event) {
    if (event.key ==='ArrowLeft') {
        right -=10;
        object.style.left = right + 'px';
    } else if (event.key ==='ArrowRight') {
        right +=10;
        object.style.left = right + 'px';
    } else if (event.key ==='ArrowUp') {
        bottom -= 10;
        object.style.top = bottom + 'px';
    } else if (event.key ==='ArrowDown') {
        bottom += 10;
        object.style.top = bottom + 'px';
    }
    });
};

let newObject = new DomElement('.block', '100px', '100px', 'red');

document.addEventListener("DOMContentLoaded", function() {
    newObject.createElem();
    newObject.moveObject();
});
