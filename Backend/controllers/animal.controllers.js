const Animal = require('../models/Animal.js');

const getAnimal = async(req, res) =>{
    const {hasta, desde} = req.query;

    const [total, animal] = await Promise.all([
        Animal.countDocuments(),
        Animal.find()
            .skip(Number(desde))
            .limit(Number(hasta))
    ]);
    res.json({
        total,
        animal
    })
}

const postAnimal = async(req, res) =>{
    const {nombre, especie, raza, edad} = req.body;
    const animal = new Animal({nombre, especie, raza, edad});
    await animal.save();
    res.json({
        "message": "get API",
        animal
    })
}

const deleteAnimal = async(req, res) =>{
    res.json({
        "message": "delete api"
    })
}

const putAnimal = async(req, res) =>{
    res.json({
        "message": "delete api"
    })
}

const patchAnimal = async(req, res) =>{
    res.json({
        "message": "delete api"
    })
}

module.exports = {
    getAnimal,
    postAnimal,
    deleteAnimal,
    putAnimal,
    patchAnimal
}