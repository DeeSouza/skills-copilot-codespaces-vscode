// Create web server that can receive POST requests to /comments
// and save the comments to a file. Each comment should be saved on a new line.
// The comments should be saved in a file called comments.txt.
// The server should respond with a 200 status code if the comments were saved successfully.
// If the comments could not be saved, the server should respond with a 500 status code.

const express = require('express')
const fs = require('fs')
const app = express()

app.use(express.json())

app.post('/comments', (req, res) => {
  const comments = req.body.comments
  fs.appendFile('comments.txt', comments + '\n', (err) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.sendStatus(200)
    }
  })
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})