const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api/product', ProductController.index);
    app.post('/api/product', ProductController.create);
    app.get('/api/product/:id', ProductController.show);
    app.put('/api/product/:id', ProductController.update);
    app.delete('/api/product/:id', ProductController.destroy);
}
