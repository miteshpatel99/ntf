module.exports = (app) => {
    const users = require('../controllers/user.controller');

    // Create a new User
    app.post('/users', users.create);

    // Retrieve all User
    app.get('/users', users.findAll);

    // Retrieve a single user with userId
    app.get('/users/:userId', users.findOne);

    // Update a User with userId
    app.put('/users/:userId', users.update);

    // Delete a User with userId
    app.delete('/users/:userId', users.delete);
}