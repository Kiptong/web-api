const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const jsonparser = bodyParser.json()

const notes = []

app.get('/notes', (req, res) => {
  res.json(notes)
})

app.use(jsonparser)

app.put('/notes/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10)
  console.log(userId)
  const noteId = notes.find((note) => {
    console.log(note.id)
    return note.id === userId
  })
  if (!noteId) {
    return res.sendStatus(404)
  }
  Object.assign(noteId, req.body)
  res.sendStatus(200)
})

app.post('/notes', (req, res) => {
  const userEntry = req.body
  notes.push(userEntry)
  res.sendStatus(201)
})

app.listen(3000, () => console.log('Listening on 3000!'))
