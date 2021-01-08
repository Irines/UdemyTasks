/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.body.querySelectorAll(".promo__adv img");
const genre = document.body.querySelector(".promo__genre");
const bg = document.body.querySelector(".promo__bg");
const clist = document.body.querySelector(".promo__interactive-list");
console.log(clist);
adv.forEach( function(item){
    item.remove();
})

genre.textContent = "Драма";
bg.style.backgroundImage = "url('../img/bg.jpg')"
clist.innerHTML = "";

movieDB.movies.sort();
movieDB.movies.forEach((item, i) => {
    clist.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${item.toUpperCase()}
        <div class="delete"></div>
    </li>
    `;
})

//just some alternative methods :)
//bg.style.cssText = "background: url(../img/bg.jpg) center center/cover no-repeat";
// const newGenre = document.createElement("div");
// newGenre.classList.add("promo__genre");
//genre.replaceWith(newGenre);
