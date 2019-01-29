const day = require('../models').day;

module.exports = {
    create(req, res) {
        return day
            .create({
                title: req.body.title,
                description: req.body.description,
                tripId: req.params.tripId
            })
            .then(day => res.status(201).send(day))
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return day
            .find({
                where: {
                    id: req.params.dayId,
                    tripId: req.params.tripId
                }
            })
            .then(day => {
                if (!day) {
                    return res.send(404).send({
                        message: 'Day not found'
                    })
                }
            })

            return day
                .update({
                    title: req.body.title || day.title,
                    description: req.body.description || day.description
                })
                .then(updatedDay => res.status(200).send(updatedDay))
                .catch(error => res.status(400).send(error));
    },


};