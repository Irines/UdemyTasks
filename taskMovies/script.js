'use strict'

let numberOfFilms;

let personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели?', 3);
        while (personalMoviesDB.count === null || personalMoviesDB.count === "" || isNaN(personalMoviesDB.count)) {
            personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели?', 3);
        }
    },
    rememberMyMovies: function() {
        let i = 0
        do {
            let movie = prompt('Один из последних просотренных фильмов?', 'Скорость');
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
    },
    detectPersonalLevel: function() {
        if (personalMoviesDB.count < 10)
            alert("Просмотрено довольно мало фильмов")
        else if (personalMoviesDB.count >= 10 || personalMoviesDB.count < 30)
            alert("Вы классический зритель")
        else if (personalMoviesDB.count >= 30)
            alert("Вы киноман")
        else 
            alert("Произошла ошибка")
    },
    writeYourGenres: function() {
        let i = 0
        do {
            let genre = prompt(`Ваш любимый жанр под номером ${i+1}`, 'Драма');
            while (genre === null || genre === "") {
                genre = prompt(`Ваш любимый жанр под номером ${i+1}`, 'Драма');
            }
            personalMoviesDB.genres.push(genre);
            i++;
        } while( i < 3 )
        personalMoviesDB.genres.forEach((item,i) => console.log(`Любимый жанр № ${i+1} - это ${item}`))
    },
    showMyDB: function() {
        if(!personalMoviesDB.privat) 
            console.log(personalMoviesDB);
    },
    toogleVisibleMyDB: function() {
        if(!personalMoviesDB.privat) 
            personalMoviesDB.privat = true
        else personalMoviesDB.privat = false
    }
}

personalMoviesDB.start();

personalMoviesDB.rememberMyMovies();

personalMoviesDB.detectPersonalLevel();

personalMoviesDB.writeYourGenres();

personalMoviesDB.toogleVisibleMyDB();

personalMoviesDB.showMyDB();





