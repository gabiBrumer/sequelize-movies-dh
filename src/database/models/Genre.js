module.exports = (sequelize, DataType) => {
    const Genre = sequelize.define("Genre", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataType.STRING,   
        ranking: DataType.INTEGER,
        active: DataType.TINYINT,
    },
    {
        tableName: 'genres',
        timestamps: false
    })

    Genre.associate = (listaDeModelos) => {
    Genre.hasMany(listaDeModelos.Movie, {
        as: "movies",
        foreignKey: "genre_id"
    })
    }
    return Genre;
}