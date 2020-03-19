const Author = require('../models/author.model');

module.exports = {

    index: (req, res) => {
        Author.find()
            .then(authors => res.json(authors))
            .catch(err => res.status(400).json(err.errors))
    },

    show: (req, res) => {
        Author.findById({_id:req.params.id})
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err.errors))
    },

    create: (req, res) => {
        Author.create(req.body)
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err.errors))
    },

    update: (req, res) => {
        Author.findByIdAndUpdate({_id:req.params.id}, req.body, {runValidators: true})
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err.errors))
    },

    destroy: (req, res) => {
        Author.deleteOne({_id:req.params.id})
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err.errors))
    }
}