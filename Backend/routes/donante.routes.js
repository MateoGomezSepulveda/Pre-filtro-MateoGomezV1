const {Router} = require('express');
const { getDonante, postDonante, deleteDonante, putDonante, patchDonante } = require('../controllers/donante.controller');



const router = Router();

router.get('/', getDonante)
router.post('/', postDonante)
router.delete('/', deleteDonante)
router.put('/', putDonante)
router.patch('/', patchDonante)

module.exports = router;