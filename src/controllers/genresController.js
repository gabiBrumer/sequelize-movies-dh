const {Genre} = require ('../database/models/index');

const genresController = {
    list: async (req, res) => {
        const genres = await Genre.findAll()
        return res.render('genresList', {genres})
    },
    detail: async (req, res) => {
        const {id} = req.params;
        const genre = await Genre.findByPk(id)
        return res.render('genresDetail', {genre})
    },
}

module.exports = genresController;