const {Schema, model} = require ('mongoose')
const mongoose= require('mongoose')

const bookSchema = new Schema ({
    titulo: String,
    paginas: Number,
    descripcion: String,
    author: String
},
{
    timestamps: true
}
)

module.exports= model("Book", bookSchema)

// author: [{type: Schema.Types.ObjectId, ref:"Author"}]
