const express = require("express")

const router = express.Router()
const { 
    getAllBooks,
    getAvailableBooks,
    addBook,
    borrowBook,
    returnBook} = require("../controllers/book-controller")

/**
 * @swagger
 * /books/:
 *   get:
 *     summary: Retrieve all books
 *     description: Fetch a list of all books in the library.
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: A list of books retrieved successfully.
 *       500:
 *         description: Internal server error.
 */
router.get('/', getAllBooks);

/**
 * @swagger
 * /books/available:
 *   get:
 *     summary: Retrieve available books
 *     description: Get a list of books that are currently available for borrowing.
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: A list of available books retrieved successfully.
 *       500:
 *         description: Internal server error.
 */
router.get('/available', getAvailableBooks);

/**
 * @swagger
 * /books/:
 *   post:
 *     summary: Add a new book
 *     description: Add a new book to the library.
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             title: "my life"
 *             author: "Hadiza"
 *             year: 2023
 *             genre: "Biography"
 *     responses:
 *       201:
 *         description: Book added successfully.
 *       400:
 *         description: Invalid input.
 *       500:
 *         description: Internal server error.
 */
router.post('/', addBook),

/**
 * @swagger
 * /books/borrow/{id}:
 *   patch:
 *     summary: Borrow a book
 *     description: Mark a book as borrowed using its ID.
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the book to borrow.
 *     responses:
 *       200:
 *         description: Book borrowed successfully.
 *       404:
 *         description: Book not found.
 *       400:
 *         description: Book is already borrowed.
 *       500:
 *         description: Internal server error.
 */

router.patch('/borrow/:id', borrowBook),

/**
 * @swagger
 * /books/return/{id}:
 *   patch:
 *     summary: Return a book
 *     description: Mark a borrowed book as returned using its ID.
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the book to return.
 
 *     responses:
 *       200:
 *         description: Book returned successfully.
 *       404:
 *         description: Book not found.
 *       500:
 *         description: Internal server error.
 */
router.patch('/return/:id', returnBook)

module.exports = router;