const {Movie, Genre } = require ('../database/models/index');

const moviesController = {
    list: async (req, res) => {
        const movies = await Movie.findAll()
        return res.render('moviesList', {movies})
    },
    new: async (req, res) => {
        const movies = await Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ]
        })
        return res.render('newestMovies', {movies})
    },
    recomended: async (req, res) => {
        const movies = await Movie.findAll({
            order: [
                ['rating', 'DESC']
            ]
        }) 
        return res.render('recommendedMovies', {movies})
    },
    detail: async (req, res) => {
        const {id} = req.params;
        const movie = await Movie.findOne({
            where: {id},
            include: "genres"
        })
        return res.render('moviesDetail', {movie})
    },
    // Exibe o formulário para a criação de filme:
    add: async (req, res) => {
        const genres = await Genre.findAll();
        return res.render ('moviesAdd', {genres})
    },
    // Recebe as infos do formulário e grava no bd:
    create: async (req, res) => {
        const { title, rating, awards, release_date, lenght, genre_id} = req.body;
        await Movie.create({
            title,
            rating,
            awards,
            release_date,
            lenght,
            genre_id
        })
        return res.redirect('/movies')
    },
    // Exibe o formulário com as infos atuais:
    edit: async (req, res) => {
        const {id} = req.params;
        const movie = await Movie.findOne({where: {id}});
        if (!movie) {
            return res.status(404).json({error: 'Movie not found'})
        }
        const genres = await Genre.findAll();

        return res.render('moviesEdit', {movie, genres});
    },
    // Recebe as infos atualizadas e grava no bd:
    update: async (req, res) => {
        const {id} = req.params;
        const { title, rating, awards, release_date, lenght, genre_id} = req.body;

        await Movie.update({
            title,
            rating,
            awards,
            release_date,
            lenght,
            genre_id
        }, 
        {
            where: {id}
        })
        return res.redirect('/movies');
    },
    // Exibe as infos do filme que deseja excluir:
    delete: async (req, res) => {
        const {id} = req.params;
        const movie = await Movie.findOne ({ where: { id } })
        return res.render('moviesDelete', {movie})
    },
    // Recebe as 'infos' do filme exclúido:
    destroy: async (req, res) => {
        const {id} = req.params;
        await Movie.destroy({ where: { id } })
        return res.redirect('/movies');
    }
}

module.exports = moviesController;