const {Schema, model} = require('mongoose');

const DonacionesSchema = Schema({
    fecha:{
        type:String,
        required: [true, 'La fecha del donante es requerido']
    },
    monto:{
        type:String,
        required: [true, 'El monto del donante es requerida']
    }
});

module.exports = model('Donacione', DonacionesSchema);