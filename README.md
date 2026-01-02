# 📚 Book Notes App

A simple full-stack web application to track books I have read, 
store personal notes and ratings, and sort them by recency or rating.

Built using Node.js, Express, PostgreSQL, and EJS.

## ✨ Features

- Add, edit, and delete books
- Store personal notes and ratings
- Sort books by read date or rating
- Persistent storage using PostgreSQL
- Book cover images using Open Library Covers API

## 🛠 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- EJS
- Open Library Covers API


## 🚀 How to Run

1. Clone the repository
   ```bash
   git clone https://github.com/Omar-Magdy-Mohamed/book-notes-app.git

2. Install dependencies    
    npm install

3. Create a PostgreSQL database and table
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT,
  notes TEXT,
  rating INTEGER,
  read_date DATE NOT NULL,
  isbn TEXT
);

4. Update database credentials in index.js

5. Update database credentials in index.js
    nodemon index.js

6. Update database credentials in index.js
    http://localhost:3000
    

## 📖 What I Learned

- Building CRUD applications with PostgreSQL
- Writing SQL queries for sorting and filtering data
- Integrating public APIs into a Node.js project
- Structuring Express applications cleanly
- Handling basic server-side errors