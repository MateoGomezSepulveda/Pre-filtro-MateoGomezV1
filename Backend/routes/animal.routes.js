const {Router} = require('express');
const {check} = require('express-validator');
const { getAnimal, postAnimal, deleteAnimal, putAnimal, patchAnimal } = require('../controllers/animal.controllers');
const { validateDocuments } = require('../middlewares/validate.documents');


const router = Router();

router.get('/', getAnimal)
router.post('/',  [
    check('nombre','nombre no es valido').not().isEmpty(),
    check('especie', 'especie no es valida').not().isEmpty(),
    check('raza','raza no es valida').not().isEmpty(),
    check('edad','edad no es valida').not().isEmpty(),
    validateDocuments
],postAnimal)
router.delete('/', deleteAnimal)
router.put('/', putAnimal)
router.patch('/', patchAnimal)

module.exports = router;