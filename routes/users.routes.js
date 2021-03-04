const {Router}= require('express')
const router= new Router()
const mongoose= require('mongoose')
const User= require('../models/User.model')
const bcrypt= require('bcrypt')
const saltRounds= 10

//Post signup
router.post('/signup', (req, res, next)=> {
  const {name, email, password}= req.body
  console.log(req.body)

  // const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  //   if (!regex.test(password)) {
  //       res.status(500).json({errorMessage:'Por favor revisa tu contraseña, debe contener al menos 6 carácteres, incluuendo un número, una letra mayúscula y una letra minúscula'})
  //       return;
  //   }

    bcrypt
    .genSalt(saltRounds)
    .then(salt => bcrypt.hash(password, salt))
    .then(password => {
      return User.create({
        name, email, password
      })
    })
    .then(user => {
      console.log('Newly created user is: ', user);
      res.redirect('/libros');
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).json({ errorMessage: error.message });
      } else if (error.code === 11000) {
        res.status(500).json({
           errorMessage: 'Nombre de usuario y corre electrónico tienen que ser únicos'
        });
      } else {
        next(error);
      }
    });
})

//Post login
router.post('/login', (req, res, next) => {
  const {email, password} = req.body

  try{
    
      userLogin =  await User.findOne({email})
      console.log(userLogin)
      if (!userLogin) {
          res.json({errorMessage:'El usuario no fue encontrado, por favor verifica la información.'})
          return;
      } else if (bcrypt.compareSync(password,userLogin.password)) {
            req.session.currentClient = userLogin;
            res.redirect('/libros');
      } else {
            res.json({errorMessage:'Contraseña incorrecta, por favor verifica.'})
        }    
      
    } catch (error) {
    next(error);
}
})

//logout
router.get('/logout', (req, res, next) => {
  req.session.destroy()
  res.redirect('/login')
})

 module.exports= router
