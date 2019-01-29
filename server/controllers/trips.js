const trip = require('../models').trip;
const day = require('../models').day;

module.exports = {
    create(req, res) {
        return trip
            .create({
                title: req.body.title,
                summary: req.body.summary
            })
            .then(trip => res.status(201).send(trip))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return trip
            .findAll({
                include: [{
                    model: day,
                    as: 'days'
            }]
        })
        .then(trips => res.status(200).send(trips))
        .catch(error => {
            console.log(error)
            res.status(400).send(error)
        })
    },

    retrieve(req, res) {
        return trip
            .findById(req.params.tripId, {
                include: [{
                    model: day,
                    as: 'days'
                }]
            })
            .then(trip => {
                if (!trip) {
                    return res.status(404).send({
                        message: 'Trip not found'
                    });
                }
                return res.status(200).send(trip)
            })
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return trip
            .findById(req.params.tripId, {
                include: [{
                    model: day,
                    as: 'days'
                }]
            })
            .then(trip => {
                if (!trip) {
                    return res.status(404).send({
                        message: 'Trip not found',
                    });
                }
                return trip
                    .update({
                        title: req.body.title || trip.title,
                        summary: req.body.summary || trip.summary
                    })
                    .then(trip => res.status(200).send(trip))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return trip
            .findById(req.params.tripId)
            .then(trip => {
                if (!trip) {
                    return res.status(404).send({
                        message: 'Trip not found',
                    });
                }
                return trip
                    .destroy()
                    .then(trip => res.status(204).send({
                        message: 'Trip deleted successfully'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};