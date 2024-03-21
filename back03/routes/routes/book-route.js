const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');

// Route to get all books
router.get('/', bookController.getBook);

// Route to create a new book
router.post('/addbooks', bookController.createBook);

// Route to update a book by ID
router.put('/:id', bookController.updateBook);

// Route to delete a book by ID
router.delete('/:id', bookController.deleteBook);

module.exports = router;
