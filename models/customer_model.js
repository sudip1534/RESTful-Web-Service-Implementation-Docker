var dbConnection=require('../../config/db.config');
 var Customer=(customer)=>{
     this.Customer_Name=customer.Customer_Name;
     this.Email=customer.Email;
     this.Contact=customer.Contact  ;
 }

/* var Order=(orders)=>{
    this.OrderId=orders.OrderId;
    this.TotalProducts=orders.TotalProducts;
    this.Bill=orders.Bill;
}*/

 //get all customers
 Customer.getAllCustomers=(result)=>{
     dbConnection.query('Select * from customers',(err,res)=>{
        if(err){
            console.log('Error while accessing customer info',err);
            result(null,err);

        }else{
            console.log('Customer data access succesfully');
            result(null,res);
        }
     });
 }

 //get customer by id from db
 Customer.getCustomerById=(id,result)=>{
     dbConnection.query('Select * from customers where CustomerID=?',id,(err,res)=>{
         if(err){
             console.log('Error to get id...',err);
             result(null,err);
         }else{
             result(null,res)
         }
     })
 }

/*
  //get orders entity by id of a customer from db
  Order.getCustomerByIdByOrder=(id,result)=>{
    dbConnection.query('Select * from orders where CustomerID=?',id,(err,res)=>{
        if(err){
            console.log('Error to get id...',err);
            result(null,err);
        }else{
            
            result(null,res)
        }
    })
}
*/
  //get specific orders entity by id of a customer from db
  Customer.getCustomerByIdByOrderId=(id,result)=>{
    //var t=dbConnection.query('Select OrderId from orders where CustomerID=?',id);
    dbConnection.query('Select * from orders where CustomerID=? and OrderId=1',id,(err,res)=>{
        if(err){
            console.log('Error to get id...',err);
            result(null,err);
        }else{
            
            result(null,res)
        }
    })
}


 module.exports=Customer;
// module.exports=Order;
