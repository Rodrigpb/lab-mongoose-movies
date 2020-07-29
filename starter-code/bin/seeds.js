const mongoose = require("mongoose");
require("../app.js")
const Celebrity = require('../models/celebrity.model')

const celebrities = [
  {name: 'Don Quijote' , occupation: 'Caballero', catchPrase: 'Como no estás experimentado en las cosas del mundo, todas las cosas que tienen algo de dificultad te parecen imposibles.'},
  {name: 'Íñigo Montoya' , occupation: 'Espadachín' , catchPrase: 'Hola, me llamo Íñigo Montoya, tú mataste a mi padre. Prepárate a morir'},
  {name: 'Pocoyo' , occupation: 'Estudiante' , catchPrase: 'Aún no sabe hablar el hombre'}
]
