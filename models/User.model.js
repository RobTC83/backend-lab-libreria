const {Schema, model}= require('mongoose')
const mongoose= require('mongoose')

const userSchema= new Schema({
    name: {
        type: String
    },
    email: {
        type:String,
        required: [true, "Por favor agrega un correo electrónico, con este iniciarás sesión"],
        unique:true,
        lowercase:true,
        trim:true,
        match:[/^\S+@\S+\.\S+$/,"Porfavor usa un correo electrónico válido"]
    },
    password: {
        type: String,
        required: [true, "Por favor agrega un password"],
    }             
},
{timestamps: true}
)

module.exports= model("User", userSchema)