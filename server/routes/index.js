const tripsController = require('../controllers/trips');
const daysController = require('../controllers/days');

module.exports = (app) => {
    
    app.post('/trip-plans/new', tripsController.create);
    app.get('/trip-plans/:tripId', tripsController.retrieve);
    app.put('/trip-plans/:tripId/edit', tripsController.update);
    app.delete('/trip-plans/:tripId', tripsController.destroy);

    app.get('/trip-plans', tripsController.list);


    app.post('/trip-plans/:tripId/days', daysController.create);
    app.put('/trip-plans/:tripId/days/:dayId', daysController.update);
};