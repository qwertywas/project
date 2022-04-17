

const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    
    start: function(){
        personalMovieDb.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while(personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)){
        personalMovieDb.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
    },

    rememberOfFilms: function(){
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
    },

    detectPersonalLevel: function(){
        if(personalMovieDb.count < 10 ) {
            console.log("Просмотренно мало фильмов");
        }else if (personalMovieDb.count > 10 && personalMovieDb.count < 30){
            console.log("Вы класс.зритель");
        }else if (personalMovieDb.count > 30){
            console.log("Вы киноман");
        }else{
            console.log("ошибка");
        }
    },
    writeGeneric: function(){
        for(let i = 1; i <= 3; i++){
            const generi = prompt(`ваш любимый жанр под номером ${i}`);
            if (generi != null && generi != "" && generi.length < 50) {
            personalMovieDb.genres[i - 1] = generi;
            } else {
                console.log("error");
                i--;
            }
        }
        personalMovieDb.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1}, - это ${item}`);
        });
    },
    showMyDb:function(hidden){
        if (!hidden){
            console.log(personalMovieDb);
        }
    },

    toggleVisibleMyDb: function(){
        if (personalMovieDb.privat == true) {
            personalMovieDb.privat = false;
        }else{
            personalMovieDb.privat = true;
        }
    }
};

//personalMovieDb.rememberOfFilms();
personalMovieDb.toggleVisibleMyDb();
personalMovieDb.showMyDb();

