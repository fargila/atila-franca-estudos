const express = require('express')
// const exphbs = require('express-handlebars')
const { engine } = require('express-handlebars');
const app = express()
const path = require('path')
const db = require('./db/connection')
const bodyParser = require('body-parser')
const Job = require('./models/Job');
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const PORT = 5500

app.listen(PORT, function() {
    console.log(`O Express está rodando na porta ${PORT}.`)
})

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

//pasta estática
app.use(express.static(path.join(__dirname, 'public')))

//parseador de corpos
app.use(bodyParser.urlencoded({ extended:false }))

//ature as barras
app.set('views', path.join(__dirname, 'views'))
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')

//conexão ao db
db.authenticate().then(()=> {
    console.log('Conectou ao banco com sucesso.')
}).catch(err => {
    console.log('Ocorreu um erro ao conectar.', err)
})

//rotas
app.get('/', (req, res) => {

    let search = req.query.job
    let query = '%'+search+'%'

    if(!search) {
        Job.findAll({ order: [
            ['createdAt', 'DESC']
        ] })
        .then(jobs=> {
            res.render("index", {
                jobs
            })
        })
        .catch(err => console.log(err))
    }
    else {
        Job.findAll({ 
            where: { title: {[Op.like]: query } },
            order: [
            ['createdAt', 'DESC']
        ] })
        .then(jobs=> {
            res.render("index", {
                jobs
            })
        })
    }
})
//'jobs' rotas
app.use('/jobs', require('./routes/jobs'))
