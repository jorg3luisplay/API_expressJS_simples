const express = require("express")
const porta = 3004
const db = require('./db')

const app = express()
const bodyParser = require('body-parser')

//bodyparser
app.use(bodyParser.urlencoded({ extended: true}))

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware1...')
//     next()
// })


app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProdutos({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = db.salvarProdutos({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSOn
})

//remove
app.delete('/produtos/:id', (req, res, next) => {
    const produto = db.removeProdutos(req.params.id)
    res.send(produto) //JSOn
})

app.listen(porta, () => {
    console.log(`Server Run in ${porta}`)
})