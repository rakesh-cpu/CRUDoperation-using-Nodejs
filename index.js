import express  from 'express';
import  bodyParser from 'body-parser';
import usersRoutes from './Routes/users.js';


const App = express();
const PORT = 5000
App.use(bodyParser.json())



App.use('/users',usersRoutes);

App.get('/',(req,res)=>{
    res.send("Hello from home page:");
})

App.listen(PORT,()=>console.log("servers is running......"));