const {Schema, model} = require('mongoose');

const AnimalSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre del Animal es requerido']
    },
    especie:{
        type:String,
        required: [true, 'La especie del Animal es requerida']
    },
    raza: {
        type:String,
        required: [true, 'La raza del Animal es requerido']
    },
    edad: {
        type:String,
        required: [true, 'La edad del Animal es requerido']
    }
});

module.exports = model('Animal', AnimalSchema);