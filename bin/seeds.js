const mongoose = require('mongoose')
const Book = require('../models/Book.model')
const Author= require('../models/Author.model')
// const MONGODB_URI = 

mongoose
  .connect('mongodb+srv://VivAlexDiego:VivAlexDiego@cluster0.mocki.mongodb.net',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })

  const books= [
    {
        titulo: "Hamlet",
        paginas: 200,
        descripcion: "La lucha contra uno mismo hacia el poder.",
        author: "W. Shakespeare"
  },
  {
    titulo: "Crepusculo",
    paginas: 250,
    descripcion: "Amor entre vampiros.",
    author: "S. Meyer"
  },
  {
    titulo: "Luna Nueva",
    paginas: 300,
    descripcion: "Amor entre vampiros.",
    author: "S. Meyer"
  },
  {
    titulo: "Eclipse",
    paginas: 350,
    descripcion: "Amor entre vampiros.",
    author: "S. Meyer"
  },
  {
    titulo: "Amanecer",
    paginas: 250,
    descripcion: "Amor entre vampiros.",
    author: "S. Meyer"
  },
  {
    titulo: "McBeth",
    paginas: 200,
    descripcion: "AMLO hacia el poder.",
    author: "W. Shakespeare"
},
{
    titulo: "Demian",
    paginas: 200,
    descripcion: "El camino hacia el auto descubrimiento",
    author: "H. Hesse"
},
{
    titulo: "Harry Potter",
    paginas: 200,
    descripcion: "Magos luchando contra el mal.",
    author: "J.K Rowling"
},

]

Book.create(books)
.then(booksFromDB => {
    console.log(`Created ${booksFromDB.length} books`)
    mongoose.connection.close()
}).catch(err => console.log(`An error ocurred: ${err}`))