const req = require('mysql');

const mysql=req

const dbconnection=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'node_mysql_api'
});

dbconnection.connect(function(error){
    if(error) throw error;
    console.log('data base connected successfully');
});

module.exports=dbconnection;
