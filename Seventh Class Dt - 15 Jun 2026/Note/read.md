# Express.js CRUD API Notes

## What is CRUD?

CRUD stands for:

* **C** → Create
* **R** → Read
* **U** → Update
* **D** → Delete

CRUD operations are the foundation of most backend applications.

---

## Project Setup

```js
const express = require('express');
const app = express();

app.use(express.json());
```

### express.json()

Middleware used to parse JSON data from the request body.

Example:

```json
{
  "title": "Node.js Book"
}
```

---

## Sample Data

```js
const book = [
    {
        id: 1,
        title: "Book1"
    },
    {
        id: 2,
        title: "Book2"
    }
];
```

This array acts as a temporary database stored in memory (RAM).

---

# 1. GET All Books

### Route

```js
app.get('/get', (req, res) => {
    res.json(book);
});
```

### Purpose

Returns all books.

### Response

```json
[
  {
    "id": 1,
    "title": "Book1"
  },
  {
    "id": 2,
    "title": "Book2"
  }
]
```

---

# 2. GET Book By ID

### Route

```js
app.get('/get/:id', (req, res) => {
    const bookbyid = book.find(
        item => item.id == req.params.id
    );

    if (bookbyid) {
        res.status(200).json(bookbyid);
    } else {
        res.status(404).json({
            message: "Book not found"
        });
    }
});
```

### Purpose

Returns a single book using its ID.

### Example

```http
GET /get/1
```

### Response

```json
{
  "id": 1,
  "title": "Book1"
}
```

---

# 3. CREATE Book

### Route

```js
app.post('/add', (req, res) => {
    const newBook = {
        id: book.length + 1,
        title: `Book ${book.length + 1}`
    };

    book.push(newBook);

    res.status(200).json({
        message: "Book is created",
        data: newBook
    });
});
```

### Purpose

Creates a new book and stores it in memory.

### Response

```json
{
  "message": "Book is created",
  "data": {
    "id": 3,
    "title": "Book 3"
  }
}
```

---

# 4. UPDATE Book

### Route

```js
app.put('/update/:id', (req, res) => {
    const bookbyId = book.find(
        item => item.id == req.params.id
    );

    if (bookbyId) {
        bookbyId.title =
            req.body.title || bookbyId.title;

        res.status(200).json({
            message: "Book Updated Successfully",
            data: bookbyId
        });
    }
});
```

### Example Request

```json
{
  "title": "Updated Book"
}
```

### Response

```json
{
  "message": "Book Updated Successfully",
  "data": {
    "id": 1,
    "title": "Updated Book"
  }
}
```

---

# 5. DELETE Book

### Route

```js
app.delete('/delete/:id', (req, res) => {
    // Delete logic
});
```

### Purpose

Removes a book using its ID.

### Note

Current implementation uses:

```js
book.pop();
```

This removes the LAST item in the array.

To delete a specific book, we will learn a better method later using:

```js
filter()
```

---

# Important Concepts Learned

## req.params

Used to get values from URL parameters.

Example:

```http
GET /get/1
```

```js
req.params.id
```

Result:

```js
1
```

---

## req.body

Used to get data sent in the request body.

Example:

```json
{
  "title": "Node.js Book"
}
```

```js
req.body.title
```

Result:

```js
"Node.js Book"
```

---

## res.json()

Used to send JSON responses.

Example:

```js
res.json({
    message: "Success"
});
```

---

## HTTP Status Codes

### 200

Request successful.

```js
res.status(200)
```

### 404

Resource not found.

```js
res.status(404)
```
