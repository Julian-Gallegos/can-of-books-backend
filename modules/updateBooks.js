'use strict'

const Book = require('../models/book');

async function updateBooks(req, res, next) {
    const id = req.params.id;
    console.log(`updateBooks recieved id: ${id}`);
    const data = req.body;
    try {
        const updatedBook = await Book.findByIdAndUpdate(id, data, { new: true, overwrite: true });
        res.status(201).send(updatedBook);
    } catch(error) {
        next(error);
    }
}

module.exports = updateBooks;