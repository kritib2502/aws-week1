const express = require('express')
const app = express()

app.use(express.static("build"))
app.use(express.json())

app.get("/", (req, res) => {
  console.log("GET /")
  res.send("<h1>AWS Week1</h1>")
})


const words = [
  {
    id: 1,
    name: "Person",
    word: "Hello",
  }
]

app.get("/api/words", (req, res) => {
  console.log("GET /api/words")
  res.send({words: words})
});

app.post("/api/words", (req, res) => {
  const data = req.body
  console.log("POST /api/words", data)
  data.id = words.length+1
  words.push(data)
  res.send(data)
})

// After all other routes
app.get('*', (req, res) => {
  res.sendFile('build/index.html');
});


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))