const {Router} = require('express');
const { getDonacion, postDonacion, deleteDonacion, putDonacion, patchDonacion } = require('../controllers/donacion.controller');



const router = Router();

router.get('/', getDonacion)
router.post('/', postDonacion)
router.delete('/', deleteDonacion)
router.put('/', putDonacion)
router.patch('/', patchDonacion)

module.exports = router;