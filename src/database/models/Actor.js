module.exports = (sequelize, DataType) => {
    const Actor = sequelize.define("Actor", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: DataType.DATE,
        updated_at: DataType.DATE,
        first_name: DataType.STRING,
        last_name: DataType.STRING,
        rating: DataType.FLOAT,
        favorite_movie_id: {
            type: DataType.INTEGER,
            foreignKey: true,
            allowNull: true
        }
    },
    {
        tableName: 'actors',
        timeStamps: true,
        underscored: true // Aceitar snake_case
    })
    Actor.associate = (listaDeModelos) => {
        // Ator tem um filme favorito;
        Actor.belongsTo(listaDeModelos.Movie, {
            foreignKey: "favorite_movie_id",
            as: "favoriteMovie"
        }),
        // Um ator pode pertencer de vários filmes;
        Actor.belongsToMany(listaDeModelos.Movie, {
            foreignKey: "actor_id",
            otherKey: "movie_id",
            through: listaDeModelos.ActorMovie, // "actor_movie"
            as: "moviesActor"
        })
    }
    return Actor;
}