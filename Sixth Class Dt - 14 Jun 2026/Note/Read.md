# Express.js Middleware

## What is Middleware?

Middleware is a function that executes between the client request and the server response.

It can:
- Log requests
- Authenticate users
- Validate data
- Modify request/response objects
- Execute code before reaching the route handler

## Middleware Syntax

```js
const middleware = (req, res, next) => {
    // Middleware logic
    next(); // Pass control to the next middleware or route
};
```

### Parameters

- `req` → Request object
- `res` → Response object
- `next()` → Calls the next middleware or route handler

---

## Example: Request Timestamp Logger

```js
const requestTimeStampLogger = (req, res, next) => {
    const timeStamp = new Date().toString();
    console.log(`${timeStamp} from ${req.method} to ${req.url}`);
    next();
};
```

### Register Middleware

```js
app.use(requestTimeStampLogger);
```

This middleware runs for every incoming request.

---

## Routes

```js
app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});
```

---

## Request Flow

```text
Client Request
       │
       ▼
Middleware
(requestTimeStampLogger)
       │
       ▼
Route Handler
       │
       ▼
Response Sent
```

---

## Example Output

When visiting:

```text
http://localhost:3000/
```

Console:

```text
Mon Mar 23 2026 10:30:00 GMT+0530 from GET to /
```

When visiting:

```text
http://localhost:3000/about
```

Console:

```text
Mon Mar 23 2026 10:31:00 GMT+0530 from GET to /about
```

---

## Key Points

- Middleware runs before the route handler.
- `app.use()` registers middleware.
- `next()` is required to continue the request flow.
- Without `next()`, the request will hang.
- Middleware can be global or route-specific.

## Summary

Middleware acts as a bridge between the request and response. It allows developers to execute logic such as logging, authentication, validation, and error handling before sending a response to the client.