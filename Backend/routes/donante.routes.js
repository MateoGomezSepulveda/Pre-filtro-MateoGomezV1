const {Router} = require('express');
const {check} = require('express-validator');
const { getDonante, postDonante, deleteDonante, putDonante, patchDonante } = require('../controllers/donante.controller');
const { validateDocuments } = require('../middlewares/validate.documents');



const router = Router();

router.get('/', getDonante)
router.post('/', [
    check('nombre','Nombre no es valido').not().isEmpty(),
    check('contacto', 'El contacto debe de tener minimo 10 digitos').isLength({min:10}),
    validateDocuments
],postDonante)
router.delete('/', deleteDonante)
router.put('/', putDonante)
router.patch('/', patchDonante)

module.exports = router;