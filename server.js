import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import ItemsList from './ItemsList.js'
import OrdersList from './OrdersList.js'
import 'ejs'

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin:'http://192.168.162.189:3000'
}))
app.use(cookieParser())
dotenv.config()

app.set('view engine', 'ejs')


const port=process.env.PORT || 8000


mongoose.connect('mongodb+srv://vishal:Cluster2004@cluster0.btbmdim.mongodb.net/QRMenu?retryWrites=true&w=majority', (err)=>{if (err) throw err; console.log('connected');})
const db=mongoose.connection


app.get('/', (req, res)=>{
    console.log('Server Connected')
})

app.get('/getCategories', (req, res)=>{
    ItemsList.find({}, (err, data)=>{
        if (err) throw err;
        let categories=[]
        console.log('getting Categories')
        for (let i of data){
            categories.push(i['category'])
        }
        res.json(categories)
    })
})

app.get('/getList', (req, res)=>{
    const cat=req.query.cat
    ItemsList.find({category:cat}, (err, data)=>{
        const items=data[0]['items']
        let list1=[]
        for (let i of Object.keys(items)){
            let obj={}
            obj[i]=items[i]
            list1.push(obj)
        }
        res.json(list1)
    })
})

app.post('/orderByCash', (req, res)=>{
    const name=req.body.name
    const num=req.body.num
    let items=JSON.parse(req.body.items)
    const seat=req.body.seat
    const orderid=req.body.orderid
    console.log('Generating Receipt');
    console.log("Name: ", name)
    console.log("Num: ", num)
    console.log("Items: ", items)
    console.log("Seat: "+seat)
    console.log('Order ID: '+orderid);
    OrdersList.create({
        orderid:orderid,
        name:name,
        num:num,
        seat: seat,
        items:items,
        cash:true
    })
})

var param = {
    billing_cust_address: 'Bangalore', 
    billing_cust_name: 'Nitish Kumar'
  };

app.get('/makePayment', (req, res)=>{
    console.log('initiating payment')
    // const orderParams = {
    //     order_id: 8765432,
    //     currency: 'INR',
    //     amount: '100',
    //     redirect_url: encodeURIComponent(`http://localhost:3000/redirectPayment/`),
    //     billing_name: 'Name of the customer',
    //     // etc etc
    // };


    
       
//       const encryptedOrderData = ccav.getEncryptedOrder(orderParams);
//       console.log("envr order data", encryptedOrderData); // Proceed further
})

app.post('/redirectPayment', (req,res)=>{
    console.log('Redirected after payment');
    // if(data.isCheckSumValid == true && data.AuthDesc == 'Y') {
    //     console.log('Success!!');
    // } else if(data.isCheckSumValid == true && data.AuthDesc == 'N') {
    //     console.log(2);
    // } else if(data.isCheckSumValid == true && data.AuthDesc == 'B') {
    //     console.log(3);
    // } else {
    //     console.log('Bad Connection')
    // }

//     const { encResp } = req.body;
//     const decryptedJsonResponse = ccav.redirectResponseToJson(encResp);
  // To check order_status: - 
    // console.log("Decrypted==>", decryptedJsonResponse.order_status);
})

app.listen(port)


// receipt loading
// payment gateway
// google sheets/excel integration at backend
// bug