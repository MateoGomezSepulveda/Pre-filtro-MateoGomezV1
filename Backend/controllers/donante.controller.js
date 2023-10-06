const Donante = require('../models/Donante.js');

const getDonante = async(req, res) =>{
    const {hasta, desde} = req.query;

    const [total, donante] = await Promise.all([
        Donante.countDocuments(),
        Donante.find()
            .skip(Number(desde))
            .limit(Number(hasta))
    ]);
    res.json({
        total,
        donante
    })
}

const postDonante = async(req, res) =>{
    const {nombre, contacto} = req.body;
    const donante = new Donante({nombre, contacto});
    await donante.save();
    res.json({
        "msg": "post api",
        donante
    })
}

const deleteDonante = (req, res) =>{
    res.json({
        "msg": "delete api"
    })
}

const putDonante = (req, res) =>{
    res.json({
        "msg": "delete api"
    })
}

const patchDonante = (req, res) =>{
    res.json({
        "msg": "delete api"
    })
}

module.exports = {
    getDonante,
    postDonante,
    deleteDonante,
    putDonante,
    patchDonante
}