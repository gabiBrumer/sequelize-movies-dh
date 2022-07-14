module.exports = (sequelize, DataType) => {
    const Movie = sequelize.define("Movie", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: DataType.DATE,
        updated_at: DataType.DATE,
        title: DataType.STRING,   
        rating: DataType.FLOAT,
        awards: DataType.INTEGER,
        release_date: DataType.DATE,
        length: {
            type: DataType.INTEGER,
            allowNull: true
        },
        genre_id: {
            type: DataType.INTEGER,
            foreignkey: true,
            allowNull: true
        }
    },
    {
        tableName: 'movies',
        timestamps: true,
        underscored: true
    })
    
    Movie.associate = (listaDeModelos) => {
        // Um filme é favorito de vários atores;
        Movie.hasMany(listaDeModelos.Actor, {
            foreignKey: "favorite_movie_id",
            as: "favoriteMovie"
        }),
        // Um filme tem um gênero;
        Movie.belongsTo(listaDeModelos.Genre, {
            foreignKey: "genre_id",
            as: "genres"
        })
        // Um filme tem muitos atores;
        Movie.belongsToMany(listaDeModelos.Actor, {
            foreignKey: "movie_id",
            otherKey: "actor_id",
            through: listaDeModelos.ActorMovie, // "actor_movie"
            as: "actorsMovie"
        })
    }
    return Movie;
}