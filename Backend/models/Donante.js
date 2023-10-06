const {Schema, model} = require('mongoose');

const DonantesSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre del donante es requerido']
    },
    contacto:{
        type:String,
        required: [true, 'El contacto del donante es requerida']
    }
});

module.exports = model('Donante', DonantesSchema);