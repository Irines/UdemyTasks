'use strict'
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 3);

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
let i = 0
do {
    let movie = prompt('Один из последних просотренных фильмов?', 'Разум и чувства');
    let mark = prompt('На сколько оцените его?', 7.5);
    if (mark === null || mark === "" || movie === null || movie === "") {
        alert("Пожалуйста, введите название и оценку!"); 
        continue;
    }
    else if (movie.length > 50) {
        alert("Название должно содержать меньше 50 символов.");
        continue;
    }
    else {
        personalMoviesDB.movies[movie] = String(mark)
        i++;
    }
} while( i < 2 )

if (personalMoviesDB.count < 10)
    alert("Просмотрено довольно мало фильмов")
else if (personalMoviesDB.count >= 10 || personalMoviesDB.count < 30)
    alert("Вы классический зритель")
else if (personalMoviesDB.count >= 30)
    alert("Вы киноман")
else 
    alert("Произошла ошибка")

console.log(personalMoviesDB);
