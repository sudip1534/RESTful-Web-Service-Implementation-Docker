var dbConnection=require('../../config/db.config');
const Customer = require('../models/customer_model');

var Order=(orders)=>{
    this.OrderId=orders.OrderId;
    this.Quantity=orders.Quantity;
    this.Product_name=orders.Product_name;
}

 //get orders entity by id of a customer from db
 Customer.getCustomerByIdByOrder=(id,result)=>{
    dbConnection.query('Select * from orders where CustomerID=?',id,(err,res)=>{
        if(err){
            console.log('Error to get id...',err);
            result(null,err);
        }else{
            
            result(null,res)
        }
    })
}

//get customer orders by orderid

Customer.getCustomerByIdByOrderId=(id,result)=>{
    
    /*
  var con='SELECT TotalProducts, Bill FROM orders INNER JOIN customers on customers.CustomerID = orders.CustomerID WHERE orders.OrderId =?'
*/

   dbConnection.query('SELECT Product_name,Quantity, Bill FROM orders INNER JOIN customers on orders.CustomerID = customers.CustomerID WHERE orders.OrderId =?',id,(err,res)=>{
       if(err){
           console.log('Error to get id...',err);
           result(null,err);
       }else{
           console.log('getttt to get id...');
           result(null,res)
       }
   })
}

module.exports=Order;
