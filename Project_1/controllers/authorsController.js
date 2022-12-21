

const mongoose= require("mongoose");
const Book= mongoose.model(process.env.BOOK_MODEL);

//GET ONE AUTHOR
module.exports.getOne= function(req, res) {
console.log("GET One Author Controller");
const bookId= req.params.bookId;
Book.findById(bookId).select("Author").exec(function(err, book) {
console.log("Found author ", book.Author, " for Book ", book);
res.status(process.env.OK_STATUS_CODE).json(book.Author);
});
}



//ADD ONE AUTHOR
module.exports.addOne = function (req, res) {
    console.log("Add One Received");
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
            _addAuthor(req, res, book);
        }).catch((error) => {
            console.log("Error finding book", error);
            response.status = parseInt(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE);
            response.message = { error };
        })
        .finally(() => {
            res.status(response.status).json(response.message);
        });

}


const _addAuthor = function (req, res, book) {
    console.log("Add Author Controller");
    const newAthor = {
        Name_of_Author: req.body.Name_of_Author,
        Year_of_Birth: parseInt(req.body.Year_of_Birth)
    };


    const response = {
        status: process.env.BOOK_STATUS_CODE,
        message: {}
    };

    book.Author.push(newAthor);

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


//UPDATE FULL AUTHOR    
module.exports.fullUpdate = function(req, res){
    console.log("Update One Received");
    const bookId = req.params.bookId;

    Book.findById(bookId).select("Author").exec(function(err,book){
        if (err) {
            console.log("Error finding book");
            response.status= process.env.BOOK_NOT_FOUND;
            response.message= err;
            } else if (!book) {
            console.log("Error finding book");
            response.status= process.env.PAGE_NOT_FOUND;
            response.message= {"message": "Book ID not found " + bookId};
            }
            if (book) {
                _updateFullAuthor(req, res, book);
                } else {
                     res.status(response.status).json(response.message);
             }
            });
            
          }
    
    
          const _updateFullAuthor= function (req, res, book) {
             book.Author = [{Name_of_Author : req.body.Name_of_Author,
            Year_of_Birth : parseInt(req.body.Year_of_Birth)}];
            
    
            book.save(function(err, updatedAuthor) {
            const response= { status: process.env.OK_STATUS_CODE, message: [] };
            if (err) {
            response.status = process.env.BOOK_NOT_FOUND;
            response.message = err;
            } 
            else {
            response.status = process.env.BOOK_STATUS_CODE;
            response.message = updatedAuthor;
            console.log(updatedAuthor);
            }
            res.status(response.status).json(response.message);
            });
            
        }

        //UPDATE PARTIAL AUTHOR
        module.exports.partialUpdate = function(req, res){
            console.log("Update One Received");
            const bookId = req.params.bookId;
        
            Book.findById(bookId).select("Author").exec(function(err,book){
                if (err) {
                    console.log("Error finding book");
                    response.status= process.env.BOOK_NOT_FOUND;
                    response.message= err;
                    } else if (!book) {
                    console.log("Error finding book");
                    response.status= process.env.PAGE_NOT_FOUND;
                    response.message= {"message": "Book ID not found " + bookId};
                    }
                    if (book) {
                        _updatePartialAuthor(req, res, book);
                        } else {
                             res.status(response.status).json(response.message);
                     }
                    });
                    
                  }
            
            
                  const _updatePartialAuthor= function (req, res, book) {
                    if(req.body.Name_of_Author ){
                     book.Author = [{Name_of_Author : req.body.Name_of_Author}
                    ];
                     }
                     if (req.body.Year_of_Birth){
                        book.Author = [{
                            Year_of_Birth : parseInt(req.body.Year_of_Birth)}];
                     }
                    book.save(function(err, updatedAuthor) {
                    const response= { status: process.env.OK_STATUS_CODE, message: [] };
                    if (err) {
                    response.status = process.env.BOOK_NOT_FOUND;
                    response.message = err;
                    } 
                    else {
                    response.status = process.env.BOOK_STATUS_CODE;
                    response.message = updatedAuthor;
                    console.log(updatedAuthor);
                    }
                    res.status(response.status).json(response.message);
                    });
                    
                }
           
      
   


















