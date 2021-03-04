const {Router}= require('express')
const router= new Router()
const mongoose= require('mongoose')
const Author= require('../models/Author.model')


router.get('/autores', (req, res, next) => {
    res.json()
})

router.post('/autores/nuevos', (req, res, next) => {
    
})

router.get('/autores/:id', (req, res, next) => {
    const {id}= req.params
})

router.post('/autores/editar/:id', (req, res, next) => {
    const {id}= req.params
    const {nombre}= req.body
})

router.post('/autores/borrar/:id', (req, res, next) => {
    const {id}= req.params
})

module.exports= router