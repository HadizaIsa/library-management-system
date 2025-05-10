const Book = require('../models/book')

const getAllBooks= async(req, res) =>{
    try{
        const book = await Book.find();
        res.status(200).json({
            book
        })
    } catch(error){
        res.status(500).json({
            error: error.message
        })
    }
};

const getAvailableBooks= async(req, res) =>{
    try{
        const book = await Book.find({
            available: true
        })
        res.status(200).json({
            book
        }) 
    } catch(error){
        res.status(500).json({
            error: error.message
        })
    }
};

const borrowBook= async(req, res) =>{
    try{
        const { id } = req.params;
        const book = await Book.findById(id);
        if(!book)
            return res.status(404)
        .json({
            message: 'Book not found'
        })
        if(!book.available) 
            return res.status(400)
        .json({
        message: 'Book not available'
        })

        book.available = false
        await book.save()

        res.status(200).json({
            message: 'Book borrowed successfully', book
        })

    } catch(error){
        res.status(500).json({
            error: error.message
        })
    }
};

const returnBook= async(req, res) =>{
    try {
        const { id } = req.params;
        const book = await Book.findById(id);

        if(!book) return res.status(400).json({
            message: 'Book not found'
        })

        book.available = true;
        await book.save();

        res.status(200).json({
            message: 'book returned successfully', book
        })

    } catch(error){
        res.status(500).json({
            error: error.message
        })
    }
};

const addBook= async(req, res) =>{
    try{
        const{title, author, year, genre,} = req.body;
        const newBook = new Book({
            title, author, year, genre, available: true
        });
        await newBook.save();
        res.status(201).json({
            message: 'Book added successfully',
            book: newBook
        })
    } catch(error){
        console.error("an error occured", error.message)
        res.status(500).json({
            error: error.message
        })
    }
}



module.exports = {
    getAllBooks,
    getAvailableBooks,
    addBook,
    borrowBook,
    returnBook
}