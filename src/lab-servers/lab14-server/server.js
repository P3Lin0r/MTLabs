import express, { json, text } from 'express';

const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next();
});


app.use(json());
app.use(text());

app.get('/', (req, res) => {
    res.send("server opened")
});

app.get('/api/current-time', (req, res) => {
    const d = new Date();
    const utsTime = d.toUTCString()
    const time = utsTime.substring(17, 25);
    res.json({
        uts_time: time
    });
});

app.post('/api/first-letter', (req, res) => {
    const input = req.body;
    if (typeof input === 'string' && input.length > 0)
        res.json({
            first_letter: input[0]
        });
    else {
        res.status(400).json({
            error: 'Invalid input'
        });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server error')
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`)
});