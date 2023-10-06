const {Schema, model} = require('mongoose');

const AdoptanteSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre del adoptante es requerido']
    },
    direccion:{
        type:String,
        required: [true, 'La direccion del adoptante es requerida']
    },
    contacto: {
        type:String,
        required: [true, 'El contacto del adoptante es requerido']
    }
});

module.exports = model('Adoptante', AdoptanteSchema);