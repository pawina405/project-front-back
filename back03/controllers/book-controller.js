const db = require("../models/db");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("imageUrl");

exports.getBook = async (req, res, next) => {
  try {
    const books = await db.book.findMany();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

exports.getBookById = async (req, res, next) => {
  try {
    const bookId = parseInt(req.params.id);
    const book = await db.book.findUnique({
      where: {
        id: bookId
      }
    });
    if (!book) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

exports.createBook = async (req, res, next) => {
  upload(req, res, async (uploadError) => {
    if (uploadError) {
      return next(uploadError);
    }
    try {
      const product = await db.book.create({
        data: {
          author_name: req.body.author_name,
          title: req.body.title,
          genre: req.body.genre,
          publishedYear: parseInt(req.body.publishedYear),
          price: parseInt(req.body.price),
          imageUrl: req.file.filename
        }
      });
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  });
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
      data: { title, author_name, genre, publishedYear, price },
    });
    res.status(200).json({ msg: "Book updated successfully" });
  } catch (error) {
    next(error);
  }
};

exports.deleteBook = async (req, res, next) => {
  const { id } = req.params;
  try {
    await db.book.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ msg: "Book deleted successfully" });
  } catch (error) {
    next(error);
  }
};
