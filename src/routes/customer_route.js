const express= require('express');

const router=express.Router();

const CustomerController=require('../controllers/customer_controller');
const OrderController=require('../controllers/order_controler')

//get all customers
router.get('/',CustomerController.getCustomerList);

router.get('/:id',CustomerController.getCustomerById);
router.get('/:id/Orders',OrderController.getCustomerByIdByOrder);
router.get('/:id/Orders/:d',OrderController.getCustomerByIdByOrderId);
module.exports=router;
