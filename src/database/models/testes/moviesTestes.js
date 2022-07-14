// const db = require('../../models/movie') - Para quando queremos usar os métodos: Create, Update, Delete.

const { Movie } = require('../index');
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
