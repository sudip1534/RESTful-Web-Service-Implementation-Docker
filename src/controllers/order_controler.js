const Order=require('../models/order_model');
const Customer = require('../models/customer_model');
exports.getCustomerByIdByOrder=(req,res)=>{
    console.log('get customer by id');
    Customer.getCustomerByIdByOrder(req.params.id,(err,orders)=>{
        if(err){
            res.send(err);
        }else{
            res.send(orders);
        }
    })

}

exports.getCustomerByIdByOrderId=(req,res)=>{
    
    Customer.getCustomerByIdByOrderId(req.params.id,(err,orders)=>{
        if(err){
            res.send(err);
        }else{
            console.log('get customer4 by id');
            res.send(orders);
        }
    })

}


