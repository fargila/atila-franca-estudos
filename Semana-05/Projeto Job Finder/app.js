const express = require('express')
const app = express()
const db = require('./db/connection')
const bodyParser = require('body-parser')

const PORT = 3000

app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`)
})

//body parser
app.use(bodyParser.urlencoded({extended: false}))

//db conexições
db.authenticate().then(()=>{
    console.log("Conectou ao banco de dados")
}).catch(err => {
    console.log("Ocorreu um erro ao conectar", err)
})

//rotas
app.get('/test', (req, res) => {
    res.send("Funcionou!")
})

//rotas jobs
app.use('/jobs', require('./routes/jobs'))