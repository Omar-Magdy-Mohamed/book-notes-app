import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "books",
  password: "1234",
  port: 5433,
});
db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", async (req, res) => {
  try {
    const sort = req.query.sort;

    let query = "SELECT * FROM books";

    if (sort === "rating") {
      query += " ORDER BY rating DESC NULLS LAST";
    } else {
      query += " ORDER BY read_date DESC";
    }

    const result = await db.query(query);

    res.render("index.ejs", {
      books: result.rows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to load books");
  }
});

app.post("/add", async (req, res) => {
  try {
    const { title, read_date, rating, notes, isbn } = req.body;

    await db.query(
      "INSERT INTO books (title, read_date, rating, notes, isbn) VALUES ($1, $2, $3, $4, $5)",
      [title, read_date, rating || null, notes || null, isbn || null]
    );

    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to add book");
  }
});

app.post("/edit", async (req, res) => {
  try {
    const { bookId, title, read_date, rating, notes, isbn } = req.body;

    await db.query(
      "UPDATE books SET title=$1, read_date=$2, rating=$3, notes=$4, isbn=$5 WHERE id=$6",
      [title, read_date, rating || null, notes || null, isbn || null, bookId]
    );

    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to update book");
  }
});

app.post("/delete", async (req, res) => {
  try {
    const bookId = req.body.bookId;

    await db.query("DELETE FROM books WHERE id = $1", [bookId]);

    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to delete book");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
