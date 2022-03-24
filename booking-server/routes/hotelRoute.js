const express= require('express')
const formidable= require("express-formidable")

const hotelController =require('./../controller/hotelController')
const authController = require('./../controller/authController')

const router= express.Router()

router.route('/create-hotel').post(authController.isLoggedin, formidable() ,hotelController.create)
router.route('/all-hotels').get(hotelController.hotels)
router.get("/image/:hotelId", hotelController.image);




module.exports= router