import express from "express";
import mysql from "mysql";

const app = express();
const PORT = 3000;

const connDB = () => {
    const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    db.connect(err => {
        if (err) {
            console.error("Error connecting to db:", err);
            setTimeout(connDB, 2000);
        } else {
            console.log("Connected");
        }
    });

    return db;
};

const db = connDB();

app.get("/", (req, res) => {
    res.send(`<h1>Server is working</h1>
        <p>Connected to MySql Database: ${process.env.DB_NAME}</p>`);
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
