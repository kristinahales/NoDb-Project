require('dotenv').config()
const express = require('express')
const app = express()
const mc = require('./Controllers/movieControllers')
const {SERVER_PORT} = process.env
app.use(express.json())

app.get('/api/movies', mc.movieCollection);
app.post('/api/movies', mc.addMovie);
app.delete('/api/movies/:id', mc.deleteMovie);
app.put('/api/movies/:id', mc.updateRating);

app.listen(SERVER_PORT, () => {
    console.log('Server is listening on ', SERVER_PORT )
})