const express = require('express');

const MovieNew = require('../controllers/movie_new');

const router =  express.Router();


router.post('/movie', MovieNew.createMovie)
router.put('/movie/:id', MovieNew.updateMovie)
router.delete('/movie/:id', MovieNew.deleteMovie)
router.get('/movie/:id', MovieNew.getMovieById)
router.get('/movies', MovieNew.getMovies)

module.exports = router