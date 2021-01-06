let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', 3);

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
    // for (let key in personalMoviesDB.movies) {
    //     
    // }
    personalMoviesDB.movies[movie] = String(mark)
    i++;
} while( i < 2 )

console.log(personalMoviesDB);
