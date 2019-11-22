express = require('express')
app = express()
path = require('path')
metrics = require('./metrics')
app.use(express.static(path.join(__dirname, 'public')))


app.set('port', 3000)
app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');


app.get(
  '/hello/:Miha', 
  (req, res) => res.render('hello.ejs', {name: req.params.name})
  )

app.get('/metrics.json', (req, res) => {
  metrics.get((err, data) => {
    if(err) throw err
    res.status(200).json(data)
  })
})
  
app.post('/', (req, res) => {
    // POST
})
  
app
  .put('/', function (req, res) {
  // PUT
})
  .delete('/', (req, res) => {    
  // DELETE
  })

app.listen(
  app.get('port'), 
  () => console.log(`server listening on ${app.get('port')}`)
)