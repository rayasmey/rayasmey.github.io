
const express = require('express');
const booksController = require('../controllers/booksController');
const authorsController= require('../controllers/authorsController');
const router = express.Router();

//The below route displays 10 books per page and it also  add a book information to the database
router.route('/')
      .get(booksController.getAll)
      .post(booksController.addOne);

//The below route displays 1 book if the book's ID is entered and it also updates and deletes a book if the given book_id is available 
router.route('/:bookId')
      .get(booksController.getOne)
      .put(booksController.fullUpdate)
      .patch(booksController.partialUpdate)
      .delete(booksController.deleteOne);


//The below route displays an author's information if the given book ID is available
router.route('/:bookId/author')
      .post(authorsController.addOne)
      .put(authorsController.fullUpdate)
      .patch(authorsController.partialUpdate);
      
//       

router.route('/bookcount')
      .get(booksController.count);
        

module.exports = router;