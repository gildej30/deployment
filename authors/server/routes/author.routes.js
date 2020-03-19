const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api/authors', AuthorController.index);
    app.get('/api/author/:id', AuthorController.show);
    app.post('/api/author', AuthorController.create);
    app.put('/api/author/:id', AuthorController.update);
    app.delete('/api/author/:id', AuthorController.destroy);
}