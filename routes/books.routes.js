const {Router}= require('express')
const router= new Router()
const mongoose= require('mongoose')
const Book = require('../models/Book.model')

router.get('/libros', async(req, res, next) => {
  const foundBook= await Book.find({})
  console.log(foundBook)
    res.json(foundBook)
})

router.post('/libros/nuevos', (req, res, next) => {
    const {titulo, paginas, descripcion, author}= req.body
})

router.get('/libros/:id', (req, res, next) => {
    const {id}= req.params
})

router.post('/libros/editar/:id', (req, res, next) => {
    const {id}= req.params
    const {titulo, paginas, descripcion, author}= req.body
})

router.post('/libros/borrar/:id', (req, res, next) => {
    const {id}= req.params
})

module.exports= router