const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const movieRouter = require('./routes/movie-router')

const app = express();
const Port = 4000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.get('/start', (req, res) => {
    res.json('hello world')
})

app.use('/api', movieRouter)


app.listen(Port, () => console.log(`SERVER listening on port ${Port}`));