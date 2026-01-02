CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  author VARCHAR (50) NULL,
  notes TEXT NULL,
  rating INTEGER NULL,
  read_date DATE NOT NULL,
  isbn VARCHAR NULL
  
);

INSERT INTO books (title, read_date)
VALUES 
('Book Test 1', '2025-01-01'),
('Book Test 2', '2024-12-15');
