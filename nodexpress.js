const express = require('express');
const app = express();
const client = require('./nodepost');

app.use(express.json());


app.get('/', (req, res) => {
    res.send("home");
})

app.get('/api/todo', (req, res) => {
    res.send("todo");
})

app.post('/api/todo', (req, res) => {
    console.log(req.body.title);
    client.query('INSERT INTO todos (title, content) VALUES ($1, $2)', [req.body.title, req.body.content])
        .then(() => res.send("added"))
        .catch(err => console.log(err))
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to port ${port}`))