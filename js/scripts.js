
let numberOfFilms;
function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberOfFilms(){
for(i=0; i < 2; i++){
    const a = prompt("Один из последних фильмов?", ""),
    b = +prompt("На сколько оцените его", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50){
        personalMovieDb.movies[a] = b;    
    } else {
        console.log("error");
        i--;
    }
}
}

//rememberOfFilms();


function detectPersonalLevel() {
    if(personalMovieDb.count < 10 ) {
        console.log("Просмотренно мало фильмов");
    }else if (personalMovieDb.count > 10 && personalMovieDb.count < 30){
        console.log("Вы класс.зритель");
    }else if (personalMovieDb.count > 30){
        console.log("Вы киноман");
    }else{
        console.log("ошибка");
    }}

//detectPersonalLevel();
function showMyDb(hidden){
    if (!hidden){
        console.log(personalMovieDb);
}
}
showMyDb(personalMovieDb.privat);

function writeGeneric() {
    for(let i = 1; i <= 3; i++){
        const generi = prompt(`ваш любимый жанр под номером ${i}`);
        personalMovieDb.genres[i - 1] = generi;
    }
}

writeGeneric();