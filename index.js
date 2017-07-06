const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const jsonparser = bodyParser.json()

const notes = []

app.use(jsonparser)

app.post('/notes', (req, res) => {
  const userEntry = req.body
  notes.push(userEntry)
  res.sendStatus(201)
})

app.listen(3000, () => console.log('Listening on 3000!'))
