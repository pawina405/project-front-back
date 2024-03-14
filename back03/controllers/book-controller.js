const db = require('../models/db')

exports.getBook = async (req, res, next) => {
  try {
    const books = await db.book.findMany();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

exports.createBook = async (req, res, next) => {
  try {
    const { author_name, title, genre, publishedYear, price } = req.body;
    if (!(author_name && title && genre && publishedYear && price)) {
      return res.status(400).json({ error: "Please fill in all book details" });
    }
    const newBook = await db.book.create({
      data: {
        author_name,
        title,
        genre,
        publishedYear,
        price
      }
    });
    res.status(201).json({ msg: 'Book added successfully', data: newBook });
  } catch (error) {
    next(error);
  }
};

exports.updateBook = async (req, res, next) => {
  const { id } = req.params;
  const { title, author_name, genre, publishedYear, price } = req.body;
  try {
    if (!title || !author_name || !genre || !publishedYear || !price) {
      return res.status(400).json({ error: "Please provide all book details" });
    }
    const updatedBook = await db.book.update({
      where: { id: parseInt(id) },
      data: { title, author_name, genre, publishedYear, price }
    });
    res.status(200).json({ msg: 'Book updated successfully' });
  } catch (error) {
    next(error);
  }
};

exports.deleteBook = async (req, res, next) => {
  const { id } = req.params;
  try {
    await db.book.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ msg: 'Book deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'upload/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname)
//   }
// });


