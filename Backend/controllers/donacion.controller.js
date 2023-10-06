const Donacione = require('../models/Donacion.js');

const getDonacion = async(req, res) =>{
    const {hasta, desde} = req.query;

    const [total, donacion] = await Promise.all([
        Donacione.countDocuments(),
        Donacione.find()
            .skip(Number(desde))
            .limit(Number(hasta))
    ]);
    res.json({
        total,
        donacion
    })
}

const postDonacion = async(req, res) =>{
    const {fecha, monto} = req.body;
    const donacion = new Donacione({fecha, monto});
    await donacion.save();
    res.json({
        "msg": "post api",
        donacion
    })
}

const deleteDonacion = (req, res) =>{
    res.json({
        "msg": "delete api"
    })
}

const putDonacion = (req, res) =>{
    res.json({
        "msg": "delete api"
    })
}

const patchDonacion = (req, res) =>{
    res.json({
        "msg": "delete api"
    })
}

module.exports = {
    getDonacion,
    postDonacion,
    deleteDonacion,
    putDonacion,
    patchDonacion
}