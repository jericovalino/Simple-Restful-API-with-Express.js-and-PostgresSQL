const { Client } = require('pg')

const client = new Client({
    user: "postgres",
    password: "postgres",
    database: "tododb"
})

client.connect()
    .then(() => console.log("connected to the database!"))
    .catch(err => console.log(err))


    // add rows
    // 'INSERT INTO todos (title, content) VALUES ($1, $2)', ['sing', 'sing a song']


// client.query('SELECT * FROM todos')
//     .then(res => console.log(res.rows))
//     .catch(err => console.log(err))


module.exports = client;