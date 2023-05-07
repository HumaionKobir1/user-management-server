const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(cors())


const users = [
    {id: 1, name: "Humaion Kobir", email: "humaionkobir02@gmail.com"},
    {id: 2, name: "Beauty Akter", email: "beautyakter02@gmail.com"},
    {id: 3, name: "Tanvir Rahman", email: "tanvier02@gmail.com"},
    {id: 4, name: "Sharmin kater", email: "sharmin02@gmail.com"}
]

app.get('/', (req, res) => {
    res.send("user server is running")
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log('post api hitting')
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`)
  })