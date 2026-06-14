# Express.js EJS Template Engine

## What is EJS?

EJS (Embedded JavaScript) is a template engine that allows us to generate dynamic HTML pages using JavaScript.

Instead of sending plain text, Express can render HTML pages with dynamic data.

---

## Installation

```bash
npm install ejs
```

---

## Configure EJS

### Import Modules

```js
const express = require('express');
const path = require('path');
```

### Set EJS as View Engine

```js
app.set('view engine', 'ejs');
```

### Set Views Directory

```js
app.set('views', path.join(__dirname, 'views'));
```

---

## Passing Data to Views

### Route

```js
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        products: products
    });
});
```

### Data

```js
const products = [
    { id: 1, product: 'Product 1' },
    { id: 2, product: 'Product 2' },
    { id: 3, product: 'Product 3' }
];
```

---

## Rendering Variables

### EJS Syntax

```ejs
<h1><%= title %></h1>
```

Output:

```html
<h1>Home</h1>
```

---

## Looping Through Data

```ejs
<ul>
    <% products.forEach(product => { %>
        <li><%= product.product %></li>
    <% }) %>
</ul>
```

Output:

```html
<ul>
    <li>Product 1</li>
    <li>Product 2</li>
    <li>Product 3</li>
</ul>
```

---

## Including Reusable Components

### Header Component

```ejs
<%- include('Components/header.ejs') %>
```

This allows us to reuse common sections like:

* Header
* Navbar
* Footer
* Sidebar

without duplicating code.

---

## EJS Tags

### Execute JavaScript

```ejs
<% code %>
```

Example:

```ejs
<% products.forEach(product => { %>
```

---

### Output Data

```ejs
<%= variable %>
```

Example:

```ejs
<%= product.product %>
```

---

### Render HTML

```ejs
<%- htmlContent %>
```

Example:

```ejs
<%- include('header.ejs') %>
```

---

## Project Structure

```text
project/
│
├── app.js
├── views/
│   ├── home.ejs
│   ├── about.ejs
│   └── Components/
│       └── header.ejs
│
├── package.json
└── node_modules/
```

---

## Request Flow

```text
Browser Request
       │
       ▼
Express Route
       │
       ▼
res.render()
       │
       ▼
EJS Template
       │
       ▼
HTML Generated
       │
       ▼
Response Sent
```

---

## Advantages of EJS

* Easy to learn
* Supports JavaScript inside HTML
* Reusable components using include
* Dynamic page rendering
* Works seamlessly with Express.js

---

## Summary

EJS is a template engine used with Express.js to create dynamic web pages. It allows rendering variables, looping through data, using conditions, and creating reusable components with include statements.
