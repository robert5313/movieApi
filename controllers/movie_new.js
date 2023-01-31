const Movie = require("../models/Movie");

createMovie = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Invalid request you must provide a movie",
    });
  }

  const movie = new Movie(body);

  if (!movie) {
    return res.status(404).json({
      success: false,
      error: error,
    });
  }

  movie
  .save()
  .then(() => {
    return res.status(200).json({
      success: true,
      id: movie.id,
      message: "Movie created successfully",
    });
  })
  .catch(error => {
    console.error(error);
    return res.status(400).json({
      error: {
        message: error.message,
        stack: error.stack,
      },
      message: 'Movie not created!',
    });
  });
};

updateMovie = async (req, res) => {
    const body = req.body
    return res.status(200).json(req.body = 'Movie updated successfully'
        );
    

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a valid id',
            })
    }

    Movie.findOne({ id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({
                err,
                message: 'Movie not found!',
    })
}
movie.name = body.name
movie.time = body.time
movie.rating = body.rating
movie
    .save()
    .then(() => {
        return res.status(200).json({
            success: true,
            id: movie._id,
            message: 'Movie updated!',
        })
    })
    .catch(error => {
        console.error(error);
        return res.status(400).json({
          error: {
            message: error.message,
            stack: error.stack,
          },
            message: 'Movie not updated!',
        })
    })
})
}

deleteMovie = async (req, res) => {
await Movie.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
if (err) {
    return res.status(400).json({ success: false, error: err })
}

if (!movie) {
    return res
        .status(404)
        .json({ success: false, error: `Movie not found` })
}

return res.status(200).json({ success: true, data: movie })
}).catch(err => console.log(err))
}

getMovieById = async (req, res) => {
await Movie.findOne({ _id: req.params.id }, (err, movie) => {
if (err) {
    return res.status(400).json({ success: false, error: err })
}

return res.status(200).json({ success: true, data: movie })
}).catch(err => console.log(err))
}

getMovies = async (req, res) => {
await Movie.find({}, (err, movies) => {
if (err) {
    return res.status(400).json({ success: false, error: err })
}
if (!movies.length) {
    return res
        .status(404)
        .json({ success: false, error: `Movie not found` })
}
return res.status(200).json({ success: true, data: movies })
}).catch(err => console.log(err))
}

module.exports = {
createMovie,
updateMovie,
deleteMovie,
getMovies,
getMovieById,
}
