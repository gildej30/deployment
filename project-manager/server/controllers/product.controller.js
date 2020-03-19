const { Product } = require('../models/product.model');

module.exports =  {
    index: (req, res) => {
        Product.find()
            .then(products => res.json({results: products}))
            .catch(err => res.json({errors: err.errors}))
    },

    show: (req, res) => {
        Product.findById({_id:req.params.id})
            .then(product => res.json({results: product}))
            .catch(err => res.json({errors: err.errors}))
    },

    create: (req, res) => {
        Product.create(req.body)
            .then(product => res.json({results: product}))
            .catch(err => res.status(400).json({errors: err.errors}))
    },

    update: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body,
            {runValidators:true})
        .then(product => res.json({res: product}))
        .catch(err => res.json({errors: err.errors}))
    },

    destroy: (req, res) => {
        Product.findOneAndDelete({_id: req.params.id})
            .then(product => res.json({res: product}))
            .catch(err => res.json({errors: err.errors}))
    }
}
