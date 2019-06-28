const movies = [
    {
        id: 1,
        name: 'How to Lose a Guy in Ten Days',
        genre: 'Romantic Comedy',
        image: 'https://upload.wikimedia.org/wikipedia/en/0/07/HowToLoseAGuyimp.jpg',
        yearReleased: 2003
    },
    {
        id: 2,
        name: 'The Incredibles',
        genre: 'Family',
        image: 'https://images-na.ssl-images-amazon.com/images/I/716RrNAAMQL._SY445_.jpg',
        yearReleased: 2004
    },
    {
        id: 3,
        name: '10 Things I Hate About You',
        genre: 'Romantic Comedy',
        image: 'https://m.media-amazon.com/images/M/MV5BMmVhZjhlZDYtMDAwZi00MDcyLTgzOTItOWNiZjY0YmE0MGE0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
        yearReleased: 1999
    },
    {
        id: 4,
        name: 'Bolt',
        genre: 'Family',
        image: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-13brs4i_abd7aa3a.jpeg?region=0%2C0%2C1000%2C1502',
        yearReleased: 2008
    },
    {
        id: 5,
        name: 'Man Of Steel',
        genre: 'Action',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51OrrZRXTvL.jpg',
        yearReleased: 2013
    },   
    {
        id: 6,
        name: 'High School Musical',
        genre: 'Musical',
        image: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-8iil4l_d6ecf7bd.jpeg?region=0%2C0%2C1000%2C1409',
        yearReleased: 2006
    },
    {
        id: 7,
        name: 'Tangled',
        genre: 'Family',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Tangled_poster.jpg/220px-Tangled_poster.jpg',
        yearReleased: 2010
    },
    {
        id: 8,
        name: 'Avengers Infinity War',
        genre: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg',
        yearReleased: 2018
    },
    {
        id: 9,
        name: 'V for Vendetta',
        genre: 'Drama',
        image: 'https://i.pinimg.com/originals/02/ae/33/02ae3383c4cba235115318dac7769713.jpg',
        yearReleased: 2005
    },
    {
        id: 10,
        name: 'Moana',
        genre: 'Family',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Moana_Teaser_Poster.jpg/220px-Moana_Teaser_Poster.jpg',
        yearReleased: 2016
    },
    {
        id: 11,
        name: 'Hostiles',
        genre: 'Drama',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZlPJ0q3cJeuu0l9x_4N_n3OT3Hg4pTbmSTR2ROJ17vPDdW2bl',
        yearReleased: 2017
    },
    {
        id: 12,
        name: 'The Island',
        genre: 'Action',
        image: 'https://images-na.ssl-images-amazon.com/images/I/5133H8SZ04L._SY445_.jpg',
        yearReleased: 2005
    },
    {
        id: 13,
        name: 'The Sound of Music',
        genre: 'Musical',
        image: 'https://images-na.ssl-images-amazon.com/images/I/5135QVBcJeL._SY445_.jpg',
        yearReleased: 1965
    },
    {
        id: 14,
        name: 'The Greatest Showman',
        genre: 'Musical',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91O1-OILdvL._SY445_.jpg',
        yearReleased: 2017
    },
    {
        id: 15,
        name: 'Five Feet Apart',
        genre: 'Drama',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Five_Feet_Apart_%282019_poster%29.png/220px-Five_Feet_Apart_%282019_poster%29.png',
        yearReleased: '2019'
    },
    {
        id: 16,
        name: 'Passengers',
        genre: 'Drama',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91lMTg9CZnL._RI_.jpg',
        yearReleased: ''
    },
    {
        id: 17,
        name: 'Wonder Woman',
        genre: 'Action',
        image: 'https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/wonder_woman_whv_keyart.jpg',
        yearReleased: '2017'
    },
    {
        id: 18,
        name: 'Eternal Sunshine',
        genre: 'Drama',
        image: 'https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg',
        yearReleased: '2004'
    },
    {
        id: 19,
        name: 'A Walk to Remember',
        genre: 'Drama',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51TKV2HF1TL._SY445_.jpg',
        yearReleased: '2002'
    },
    {
        id: 20,
        name: 'Hunger Games',
        genre: 'Action',
        image: 'https://m.media-amazon.com/images/M/MV5BMTcxNDI2NDAzNl5BMl5BanBnXkFtZTgwODM3MTc2MjE@._V1_.jpg',
        yearReleased: '2012'
    },
    {
        id: 21,
        name: 'The Little Mermaid',
        genre: 'Family',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51ZV1782WTL._SY445_.jpg',
        yearReleased: '1989'
    },
    {
        id: 22,
        name: 'Iron Man',
        genre: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/7/70/Ironmanposter.JPG',
        yearReleased: '2008'
    },
    {
        id: 23,
        name: 'Father of the Bride',
        genre: 'Romantic Comedy',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51vZsxLiN1L._SY445_.jpg',
        yearReleased: '1991'
    },
    {
        id: 24,
        name: 'Cheaper By the Dozen',
        genre: 'Family',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51AIZHCxf2L._AC_SY400_.jpg',
        yearReleased: '2003'
    },
    {
        id: 25,
        name: 'Me Before You',
        genre: 'Drama',
        image: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Me_Before_You_%28film%29.jpg',
        yearReleased: '2016'
    },
    {
        id: 26,
        name: 'Despicable Me',
        genre: 'Family',
        image: 'https://images-na.ssl-images-amazon.com/images/I/716xYKcJj5L._SY445_.jpg',
        yearReleased: '2010'
    },
]

let id = 26


module.exports = {
    movieCollection(req, res) {
        if(req.query.genre) {
            const selected = movies.filter(movie => {
                return movie.genre === req.query.genre
            });
            return res.status(200).send(selected)
        }
        return res.status(200).send(movies) 
    },
    deleteMovie(req, res) {
        let { id } = req.params;
        let index = movies.findIndex(movie => movie.id === +id);
        index !== -1 && movies.splice(index, 1);
        res.status(200).send(movies);
    },
    addMovie(req, res) {
        let {name, genre, image, yearReleased} = req.body;
        let newMovie = {
            id,
            name, 
            genre, 
            image, 
            yearReleased,
            rating: 1
        };
        id++;
        movies.push(newMovie);
        res.status(200).send(movies);
    },
    updateRating(req, res) {
        let {id} = req.params;
        let {newRating} = req.query;
        let index = movies.findIndex(movie => movie.id === +id);
        movies[index].rating = +newRating;
        res.status(200).send(movies);
    },
}