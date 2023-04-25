const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://db_486exampledatabase_user:hvTCzmU5PWO2vjLhGo6x5eQuhDNKxEOr@dpg-cghvpno2qv2772ga8bn0-a/db_486exampledatabase')
app.get('/', (req, res) => {
    res.send('Hello World!')
})
/*app.get('/students', (req, res) => {
 db.any('SELECT * from public.student')
 .then((data) => {
  console.log('DATA:', data)
  res.send(JSON.stringify(data))
 })
 .catch((error) => {
  console.log('ERROR:', error)
    res.send ("ERROR:Can't get data")
  })
  
})*/
app.listen(port, () => {
    console.log(`My Example app listening on port ${port}`)
})


app.post('/student', (req, res) => {
    console.log('Got body:', req.body);
    const { id } = req.body;
    db.any('select * from public.student where "id" = $1', id)
        .then((data) => {
            console.log('DATA:', data)
            res.json(data)
        })
        .catch((error) => {
            console.log('ERROR:', error)
            res.send("ERROR:Can't get data")
        })
});
