'use strict';

const Book = require('../models/book');

async function postBooks(req, res, next){
	console.log(req.body);
	try{
		const newBook = await Book.create(req.body);
		res.status(201).send(newBook);
	}catch(error){
		next(error);
	}
}

module.exports = postBooks;