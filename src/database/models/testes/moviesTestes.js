const { Movie } = require('../src/database/models');
const { Actor } = require('../src/database/models');

const { Op } = require('sequelize');
const db = require('../index');

// moviesAll();
const moviesAll = async () => {
    const movies = await Movie.findAll();
    console.log(movies)
}

// movies allWhere();
const moviesAllWhere = async () => {
    const movies = await Movie.findAll({
        where:{
            [Op.and]: [
                {
                  rating: {
                    [Op.gt]: 9
                  }
                },
                {
                  awards: {
                    [Op.gt]: 2
                  }
                }
            ]
        }
    });
    movies.length > 0 ? console.log(movies) : console.log('not found');
  }
  moviesAllWhere();
  
// moviePk();
const moviePk = async () => {
    const movie = await Movie.findByPk(1);
    console.log(movie);
}

// movieOne();
const movieOne = async () => {
    const movie  = await Movie.findOne({where : { title: {[Op.like]: '%harry%'} }})
    console.log(movie);
}

// .create()
db.Movie.Create ({
  // Aqui vai a lógica:
  // name: 'Fulano de tal',
  // username: 'fulano1',
  // password: 'fulano123'
});

//bulkCreate()
bulkCreate: async (req, res) => {
  // const listaDeArrays = [];
  // const resultadoLista = await Movie.BulkCreate(listaUsuarios);

  // res.send('Usuários cadastrados')
}

db.Moive.Update ({
  // Aqui vai a lógica:
  // username: 'Fulano de tal'
}, {
  // where: {id: 1}
})

// .destroy()
db.Movie.Destroy({
  // where: {id: 10}
})

// Testando as associações:

async function getActor(id) {
  const actor = await Actor.findByPk(id, {
    include: ['favoriteMovie']
  })
   console.log(`
   ID: ${actor.id},
   Nome: ${actor.fistName} ${actor.lastName}
   FavoriteMovieID: ${actor.favoriteMovieId}
   MovieTitle: ${(actor.favoriteMovie ? actor.favoriteMovie.title : "Filme não encontrado")}
   `)
}

// getActor(1)

async function getOneMovie(id) {
  const movie = await Movie.findByPk(id, { include: 'genre'});
  if (!movie) {
      throw new Error('Movie not found');
  }
  console.log(`
      Title: ${movie.title}
      Genre: ${movie.genre.name}
  `);
  return movie;
}

getOneMovie(2)
