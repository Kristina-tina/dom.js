"use strict"

/*1. За допомогою DOM створити елемент section. 
Встановити у нього атрибут id зі значенням “root”. 
Всередину цього елемента прописати довільний рядок тексту. 
Встановити колір тексту для елемента. Відобразити елемент, зробивши його дочірнім до <body>*/

let section = document.createElement('section');
section.id = 'root';
section.textContent = 'Text.';
section.style.color = 'green';
document.body.appendChild(section);

/*2. За допомогою DOM отримати посилання на існуючий на сторінці елемент 
(div або section, який заздалегідь має існувати в розмітці і містити якийсь тексту) 
та змінити йому колір тла на фіолетовий, а колір тексту на білий.*/

let sSection = document.querySelector('section');
section.style.backgroundColor = 'purple';
section.style.color = 'white';


/*3. За допомогою prompt отримати у користувача його ім’я,
 після чого створити і відобразити на сторінці елемент <h1>, 
 який містить текст “Вітаю, (введене користувачем ім’я)”*/

 let userName  = prompt('Your Name?');
 let elem = document.createElement ('h1');
 elem.textContent = `Hi, ${userName}`;
document.body.appendChild(elem);