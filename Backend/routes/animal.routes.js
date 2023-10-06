const {Router} = require('express');
const { getAnimal, postAnimal, deleteAnimal, putAnimal, patchAnimal } = require('../controllers/animal.controllers');


const router = Router();

router.get('/', getAnimal)
router.post('/', postAnimal)
router.delete('/', deleteAnimal)
router.put('/', putAnimal)
router.patch('/', patchAnimal)

module.exports = router;