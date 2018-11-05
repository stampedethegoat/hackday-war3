const app  = require('express')()
const port = process.env.PORT || 3000;
//const index = require('./index');

app.set('views', '../views')
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
  console.log(`__dirname`, __dirname);
  //let gameObj = await index.getReplayData();
  res.render('index', { title   : 'Hackday' })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
