const tracer = require('dd-trace').init()
const app    = require('express')()
const port   = process.env.PORT || 3000;
const index  = require('./index');

app.set('views', __dirname + '/../views');
app.set('view engine', 'pug')

app.get('/', async (req, res) => res.render('index', { title   : 'Hackday' }));

app.get('/post', async (req, res) => {
  await index.submitMetrics();
  res.send('POST request sent to Datadog')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
