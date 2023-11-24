const exp = require("constants");
const express = require("express");
const {
  addTransection,
  getAllTransection,
  editTransection,
  deleteTransection,
} = require("../controllers/transectionCtrl");

//router object
const router = express.Router();

//routes
//Add Transaction
router.post("/add-transection", addTransection);

//Edit Transaction
router.post("/edit-transection", editTransection);

//Delete Transaction
router.post("/delete-transection", deleteTransection);

//Get Transaction
router.post("/get-transection", getAllTransection);

module.exports = router;
