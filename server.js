const express = require('express')
const app = express()


const userRoutes = require('./routes/user')
const adminRoutes = require('./routes/admin')
const path = require('path')
const connectDB = require('./db/connectDB')



app.set("views" , path.join(__dirname , 'views'));
app.set('view engine' , 'hbs');
app.use(express.static('public'));


app.use('/user' , userRoutes)
app.use('/admin' , adminRoutes)




connectDB();


app.listen(3003,()=>{
   
    console.log("server started at : http://localhost:3003/");
    

})
