const express = require('express');

const app = express();


// Middleware

app.use(express.json())


const book = [
    {
        id: 1,
        title: "Book1"
    },
    {
        id: 2,
        title: "Book2"
    }
]

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to our BookStore"
    })
})

// get all books
app.get('/get', (req, res) => {
    res.json(book)
})

// get by id

app.get('/get/:id', (req, res) => {
    const bookbyid = book.find(item => item.id == req.params.id)
    if (bookbyid) {
        res.status(200).json(bookbyid);
    } else {
        res.status(404).json({
            message: "Book not found"
        })
    }

})


// Add a new book

app.post('/add', (req, res) => {
    const newBook = {
        id: book.length + 1,
        title: `Book  ${book.length + 1}`
    }
    book.push(newBook);
    res.status(200).json({
        message: 'Book is created',
        data: newBook
    })
})

// Delete a book 

app.delete('/delete/:id', (req, res) => {
    const bookbyId = book.find(item => item.id == req.params.id);
    if (bookbyId) {
        book.pop(bookbyId);
        res.status(200).json({
            message: 'Book deleted sucessfully',
            data: bookbyId
        })
    } else {
        res.status(404).json({
            message: 'Book not found'
        })
    }

})

// Update book by req.body

app.put('/update/:id', (req, res) => {
    const bookbyId = book.find(item => item.id == req.params.id);
    if (bookbyId) {
        bookbyId.title = req.body.title || bookbyId.title;
        res.status(200).json({
            message: "Book Update Sucessfully",
            data: bookbyId
        })
    } else {
        res.status(404).json({
            message: 'Book not found'
        })
    }
})
app.listen(3000, () => {
    console.log("App is running")
})