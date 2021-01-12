/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', ()=> {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.body.querySelectorAll(".promo__adv img"),
    genre = document.body.querySelector(".promo__genre"),
    bg = document.body.querySelector(".promo__bg"),
    clist = document.body.querySelector(".promo__interactive-list"),
    btn = document.body.querySelector("button"),
    inpt = document.body.querySelector(".adding__input"),
    checkbox = document.body.querySelector("[type='checkbox']"),
    addForm = document.body.querySelector(".add");

    function delAdds(todelete){
        todelete.forEach( function(item){
            item.remove();
        })
    }
    
    function changes() {
        genre.textContent = "Драма";
        bg.style.backgroundImage = "url('../img/bg.jpg')";
    }
    
    function sortMovies(arr) {
        arr.sort();
    }

    function addMovies(filmList, films){
        filmList.innerHTML = "";
        sortMovies(movieDB.movies);
        films.forEach((item, i) => {
            filmList.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${item.toUpperCase()}
                <div class="delete"></div>
            </li>
            `;
        })

        document.body.querySelectorAll(".delete").forEach((btn,i) => {
            btn.addEventListener('click', (e) => {
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);
                addMovies(filmList, films);
            })
        })
    }

    function checkMovieLen() {
        if (inpt.value.length > 21) {
            inpt.value = inpt.value.slice(0,21);
            console.log(inpt.value);
            inpt.value += "...";
        }
    }
    
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        if(inpt.value) {
            checkMovieLen();
            movieDB.movies.push(inpt.value);
            addMovies(clist, movieDB.movies);
            if(checkbox.checked) {
                console.log("Добавляем любимый фильм");
            }
            addForm.reset();
        }
    })

    delAdds(adv);
    changes();
    addMovies(clist, movieDB.movies);
});
