require("dotenv").config();
const express=require('express');
const  bodyParser = require('body-parser');
const db=require('./db')
const cors=require('cors')



const app=express();
const port=process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.json())

//get all restaurants
app.get('/api/v1/restaurants', async(req,res)=>{
    try {
        let results= await db.query('select * from restaurants;')
        let resObj={
            count:results.rows.length,
                restaurants:results.rows
        }
        res.json(resObj)
    } catch (error) {
        console.error(error)
    }
})

//get a restaurant
app.get('/api/v1/restaurants/:id', (req,res)=>{
})

//create a restaurant
app.post('/api/v1/restaurants',async(req,res)=>{
    try {
        let result= await db.query(`INSERT INTO restaurants (id,name,location,price_range) VALUES(uuid_generate_v4(),$1::text,$2::text,$3) returning *;`,[req.body.name,req.body.location,req.body.price])
        res.json(result)
    } catch (error) {
        console.error(error)
    }
})
//update a restaurant
app.put('/api/v1/restaurants/:id',async(req,res)=>{ 
    try {
        const result=db.query('UPDATE restaurants SET name=$1,location=$2,price_range=$3 WHERE id=$4 RETURNING *;',[req.body.name,req.body.location,req.body.price_range,req.params.id])
    } catch (error) {
        console.error(error)
    }

})
//delete a restaurant
app.delete('/api/v1/restaurants/:id',async(req,res)=>{
try {
    let result=await db.query('DELETE FROM restaurants WHERE id=$1 RETURNING *;',[req.params.id])
} catch (error) {
    console.error(error)
}
})



app.listen(port,()=>{
    console.log(`Server is listening on port: ${port}...`);
})