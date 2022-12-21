


const mongoose = require("mongoose");
const Book = mongoose.model(process.env.BOOK_MODEL);


module.exports.count = function (req, res) {
    Book.find().count()
        .then((count) => {
            console.log(count);
            res.status(process.env.BOOK_STATUS_CODE).json(count);
        });

}


//GET ONE BOOK
module.exports.getOne = function (req, res) {
    console.log("Get One Received");
    const bookId = req.params.bookId;

    const response = {
        status: process.env.BOOK_STATUS_CODE,
        message: {}
    };


    Book.findById(bookId).exec()
        .then((book) => {   
            if (!book) {
                console.log("Book not found");
                response.status = parseInt(process.env.BOOK_NOT_FOUND);
                response.message = { "Book ID not found": bookId };
            }
            console.log("Book Found");
            response.status = parseInt(process.env.OK_STATUS_CODE);
            response.message = book;
        }).catch((error) => {
            console.log("Error finding book", error);
            response.status = parseInt(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE);
            response.message = error;
        }).finally(() => {
            res.status(response.status).json(response.message);
        });
}
    

//GET ALL BOOKS USING OFFSET AND COUNT
module.exports.getAll = function (req, res) {

    console.log("Get All Books Received");

    let offset = parseFloat(process.env.DEFAULT_FIND_OFFSET, 10);
    let count = parseFloat(process.env.DEFAULT_FIND_COUNT, 10);
    const maxCount = parseInt(process.env.DEFAULT_MAX_FIND_LIMIT, 10);

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    if (isNaN(offset) || isNaN(count)) {
        res.status(process.env.QUERY_STATUS_CODE).json({ "message": "Query String Offset and Count should be numbers" });
        return;
    }

    if (count > maxCount) {
        res.status(process.env.QUERY_STATUS_CODE).json({ "message": "Cannot exceed count of " + maxCount });
        return;
    }

    const response = {
        status: process.env.BOOK_STATUS_CODE,
        message: {}
    };

    Book.find().skip(offset).limit(count).exec()
        .then((books) => {
            console.log("Found books", books.length);
            response.status = parseInt(process.env.OK_STATUS_CODE);
            response.message = books;
        }).catch((error) => {
            console.log("Error in find Games", error);
            response.status = parseInt(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE);
            response.message = { error };
        })

        .finally(() => {
            res.status(response.status).json(response.message);
        });
}





//ADD A BOOK 
module.exports.addOne = function (req, res) {
    console.log("Book AddOne request", req.body);

    const newBook = {
        Title: req.body.Title, Year: parseInt(req.body.Year), Publisher: req.body.Publisher,
        Author : [{
            Name_of_Author: req.body.Name_of_Author,
            Year_of_Birth: parseInt(req.body.Year_of_Birth)
        }]
    };

    const response = {
        status: process.env.BOOK_STATUS_CODE,
        message: {}
    };

    Book.create(newBook)
        .then((books) => {
            console.log("Book created");
            response.status = parseInt(process.env.BOOK_STATUS_CODE);
            response.message = books;
        }).catch((error) => {
            console.log("Error in creating Book", error);
            response.status = parseInt(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE);
            response.message = { error };
        })
        .finally(() => {
            res.status(response.status).json(response.message);
        });

}


//DELETE A BOOK 
module.exports.deleteOne = function (req, res) {
    console.log("Update One Received");
    const bookId = req.params.bookId;

    const response = {
        status: process.env.BOOK_STATUS_CODE,
        message: {}
    };

    Book.findByIdAndDelete(bookId).exec()
        .then((book) => {
            console.log("Book deleted");
            response.status = parseInt(process.env.BOOK_STATUS_CODE);
            response.message = book;
        })
        .catch((error) => {
            console.log("Error finding book");
            response.status = parseInt(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE);
            response.message = { error };
        }).catch((bookId) => {
            console.log("Book is not found");
            response.status = parseInt(process.env.BOOK_STATUS_CODE);
            response.message = { "Book ID not found": bookId };
        })
        .finally(() => {
            res.status(response.status).json(response.message);
        });

}


//UPDATE FULL BOOK        
module.exports.fullUpdate = function (req, res) {
    console.log("Update One Received");
    const bookId = req.params.bookId;

    const response = {
        status: process.env.BOOK_STATUS_CODE,
        message: {}
    };

    Book.findById(bookId).exec()
        .then((book) => {
            if (!book) {
                console.log("Book is not found");
                response.status = parseInt(process.env.BOOK_NOT_FOUND);
                response.message = { "Book ID not found": bookId };
            }
            console.log("updateBook Id found");
            _updateFullBook(req, res, book);
        }).catch((error) => {
            console.log("Error finding book", error);
            response.status = parseInt(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE);
            response.message = { error };
        })
        .finally(() => {
            res.status(response.status).json(response.message);
        });

}


const _updateFullBook = function (req, res, book) {
    book.Title = req.body.Title;
    book.Year = parseInt(req.body.Year);
    book.Publisher = req.body.Publisher;

    const response = {
        status: process.env.BOOK_STATUS_CODE,
        message: {}
    };

    book.save()
        .then((updatedBook) => {
            console.log("Book Updated");
            response.status = parseInt(process.env.BOOK_STATUS_CODE);
            response.message = updatedBook;
        }).catch((error) => {
            console.log("Error in updating Book", error);
            response.status = parseInt(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE);
            response.message = { error };
        });

}

//UPDATE PARTIAL BOOK   
module.exports.partialUpdate = function (req, res) {
    console.log("Update Partial One Received");
    const bookId = req.params.bookId;

    const response = {
        status: process.env.BOOK_STATUS_CODE,
        message: {}
    };

    Book.findById(bookId).exec()
        .then((book) => {
            if (!book) {
                console.log("Error finding book");
                response.status = parseInt(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE);
                response.message = { "Book ID not found": bookId };
            }
            console.log("updateBook Id found");
            _updatePartialBook(req, res, book);
        }).catch((error) => {
            console.log("Error finding book", error);
            response.status = parseInt(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE);
            response.message = { error };
        })
        .finally(() => {
            res.status(response.status).json(response.message);
        });

}


const _updatePartialBook = function (req, res, book) {
    console.log("On Update Partial");
    if (req.body.Title) { book.Title = req.body.Title; }
    if (req.body.Year) { book.Year = parseInt(req.body.Year) };
    if (req.body.Publisher) { book.Publisher = req.body.Publisher };
    if (req.body.Name_of_Author) { book.Author.Name_of_Author = req.body.Name_of_Author };
    if (req.body.Year_of_Birth) { book.Author.Year_of_Birth = req.body.Year_of_Birth };

    const response = {
        status: process.env.BOOK_STATUS_CODE,
        message: {}
    };

    book.save()
        .then((updatedProperty) => {
            console.log("Property Updated");
            response.status = parseInt(process.env.BOOK_STATUS_CODE);
            response.message = updatedProperty;
        }).catch((error) => {
            console.log("Error in updating Property", error);
            response.status = parseInt(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE);
            response.message = { error };
        });
}


