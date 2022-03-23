const express = require("express");
const router = express.Router();
const billController = require('../controllers/billController');

router.post('/', billController.createBill);
router.get('/', billController.getBills);
router.put('/:id', billController.updateBill)
router.get('/:id', billController.getBill);
router.delete('/:id', billController.deleteBill);

module.exports = router