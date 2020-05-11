const { Client } = require('pg')

const client = new Client({
    user: "postgres",
    password: "postgres",
    database: "mytododb"
})

client.connect()
    .then(() => console.log("connected to the database!"))
    .catch(err => console.log(err))

module.exports = client;