const {Router} = require('express');
const {check} = require('express-validator');
const { getDonacion, postDonacion, deleteDonacion, putDonacion, patchDonacion } = require('../controllers/donacion.controller');
const { validateDocuments } = require('../middlewares/validate.documents');



const router = Router();

router.get('/', getDonacion)
router.post('/',  [
    check('fecha','Fecha no es valida').not().isEmpty(),
    check('monto', 'El monto debe de ser minimo de 2.000').isLength({min:5}),
    validateDocuments
],postDonacion)
router.delete('/', deleteDonacion)
router.put('/', putDonacion)
router.patch('/', patchDonacion)

module.exports = router;