const express= require('express')
const stripeConnect =require('./../controller/stripeController')
const authController = require('./../controller/authController')

const router= express.Router()

router.route('/create-connect-account').post(authController.isLoggedin,stripeConnect.createStripeAcc)


module.exports= router

