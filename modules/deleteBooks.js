'use strict';

const Book = require('../models/book');

async function deleteBooks(req,res, next){
	const id = req.params.id;
    try{
		await Book.findByIdAndDelete(id);
		res.status(204).send('Successfully Deleted');
	}catch(error){
		next(error);
	}
}

module.exports = deleteBooks;