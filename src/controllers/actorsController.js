const {Actor} = require ('../database/models/index');

const actorsController = {
    index: async (req, res) => {
        const actors = await Actor.findAll()
        return res.render('actors', {actors})
    },
    show: async (req, res) => {
        const {id} = req.params;
        const actor = await Actor.findOne({
            where: {id},
            include: "favoriteMovie"
        })
        return res.render('actorDetail', {actor})
    }
}

module.exports = actorsController;