// let {readFile, writeFile} = require('fs')

// readFile('arquivo.txt', 'utf8', (error, texto) => {
//     if(error){
//         throw error
//     }
//     else
//     console.log(texto)
// })

// writeFile('arquivo.txt', 'Texto por write file', (error) => {
//     if(error){
//         throw error
//     }
//     else
//     console.log("Algo mudou...")
// })

// const {createServer} = require('http')
// let server = createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/html"})
//     response.write(`
//         <h1>Título muito comum</h1>
//         <p>Primeira página com node.js</p>
//         `)
//     response.end()
// })

// server.listen(8000)
// console.log("Porta 8000")

let express = require('express')
let app = express()

app.get('/', function(req, res) {
    res.send('Primera rota com Express')
})

app.listen(3000, function(){
    console.log('A aplicação está funcionando na porta 3000')
})