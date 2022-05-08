const Customer = require('../models/customer_model');
const CustomerModel=require('../models/customer_model');

exports.getCustomerList=(req,res)=>{
   // console.log('customer list is here .');
   CustomerModel.getAllCustomers((err,customers)=>{
       console.log('its working');
       if(err){
           res.send(err);
       }else{
           console.log('customers',customers);
           res.send(customers);
       }
   })
}


exports.getCustomerById=(req,res)=>{
    //console.log('get customer by id');
    CustomerModel.getCustomerById(req.params.id,(err,customers)=>{
        if(err){
            res.send(err);
        }else{
            res.send(customers);
        }
    })

}
/*

exports.getCustomerByIdByOrder=(req,res)=>{
    console.log('get customer by id');
    CustomerModel.getCustomerByIdByOrder(req.params.id,(err,orders)=>{
        if(err){
            res.send(err);
        }else{
            res.send(orders);
        }
    })

}
*/

exports.getCustomerByIdByOrderId=(req,res)=>{
    console.log('get customer by id');
    CustomerModel.getCustomerById(req.params.id,(err,orders)=>{
        if(err){
            res.send(err);
        }else{
            res.send(orders);
        }
    })

}
