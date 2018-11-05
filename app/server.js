const app  = require('express')()
const port = 3000
const index = require('./index');

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
  let gameObj = await index.getReplayData();
  console.log(`gameObj`, gameObj);
  res.render('index', { title   : 'Hackday' })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
