const express = require("express");

const app = express();

const details = require('./Details.json')

const port = process.env.PORT || 3001;

app.get('/api/restaurant' , (req,res)=>{
    res.send(details.shoplists)
    
})

app.get('/api/restaurant/:id' , (req,res)=>{
    const restaurant = details.shoplists.find(c => c.id === parseInt(req.params.id));
    if(!restaurant) res.status(404).send("The Restaurant not found");
    res.send(restaurant);
})

app.get('/api/restaurant/:id/foods' , (req,res)=>{
    const restaurant = details.shoplists.find(c => c.id === parseInt(req.params.id));
    if(!restaurant) res.status(404).send("The Restaurant not found");
    const foods = restaurant.foods;
    res.send(foods);
})

app.get('/api/restaurant/:id/foods/:food' , (req,res)=>{
    const restaurant = details.shoplists.find(c => c.id === parseInt(req.params.id));
    if(!restaurant) res.status(404).send("The Restaurant not found");
    const foods = restaurant.foods.find(c => c.id === parseInt(req.params.food));
    if(!foods) res.status(404).send("The Food not found");
    res.send(foods);
})

app.listen(port,()=>{
    console.log(`sever running in ${port}`);
})