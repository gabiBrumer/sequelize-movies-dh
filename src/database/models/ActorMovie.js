module.exports = (sequelize, DataType) => {
    const ActorMovie = sequelize.define("ActorMovie", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: DataType.DATE,
        updated_at: DataType.DATE,
        actor_id: {
            type: DataType.INTEGER,
            foreignKey: true,
        },
        movie_id: {
            type: DataType.INTEGER,
            foreignKey: true,
        }
    },
    {
        tableName: 'actor_movie',
        timeStamps: true,
        underscored: true // Aceitar snake_case
    })
    return ActorMovie;
}