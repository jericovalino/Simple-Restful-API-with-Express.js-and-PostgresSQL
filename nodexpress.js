const express = require('express');
const app = express();
const client = require('./nodepost');

app.use(express.json());


app.get('/', (req, res) => {
    res.send("home");
})

app.get('/api/todo', (req, res) => {
    client.query('SELECT * FROM todos')
        .then(({ rows }) => res.send(rows))
        .catch(err => console.log(err))
})

app.post('/api/todo', (req, res) => {
    console.log(req.body.title);
    client.query('INSERT INTO todos (title, content) VALUES ($1, $2)', [req.body.title, req.body.content])
        .then(() => res.send("added"))
        .catch(err => console.log(err))
})

app.delete('/api/todo/:id', (req, res) => {
    client.query(`DELETE FROM todos WHERE id = ${req.params.id}`)
        .then(res.send("todo with the id of " + req.params.id +" deleted.."))
        .catch(err => console.log(err))
})

app.put('/api/todo/:id', (req, res) => {
    client.query(`UPDATE todos SET content = '${req.body.content}' WHERE id = ${req.params.id}`)
        .then(() => res.send("updated"))
        .catch(err => console.log(err))
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to port ${port}`))