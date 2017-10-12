const authenicationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
    app.post('/register',
        authenicationController.register
    );
}