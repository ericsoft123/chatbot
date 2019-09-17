const express = require('express');
var cors = require('cors');
const server = express();

server.use(express.static('public'));

server.use('/images', express.static(__dirname + '/Images'));
server.use('/css', express.static(__dirname + '/css'));
server.use('/js', express.static(__dirname + '/js'));

//Cors to allow browser access server
server.use(cors());

let bank=require('./models/bank');
let greeting =require('./models/greeting');

let question=require('./models/question');

const body_parser = require('body-parser');


// parse JSON (application/json content-type)
server.use(body_parser.json());



server.get("/json", (req, res) => {
  
    res.json({ message: "Hello world" });
 });

 
 server.get("/greeting", (req, res) => {
   let great=greeting[Math.floor(Math.random() * Math.floor(greeting.length))];
   res.end(great);
});


server.get("/question/:id", (req, res) => {
   const questionId = req.params.id;
   res.end(question[questionId]);
});

server.get("/services", (req, res) => {
    
   
  
 

  
      res.json(bank.Services);
  



});


/*
 server.get("/account/:id", (req, res) => {
    
    const itemId = req.params.id;
   
    const bankdata =bank.Account.find(account=>account.Account_number===itemId);
 
    if (bankdata) {
       res.json(bankdata);
    } else {
       res.json({ message: `item ${itemId} doesn't exist`})
    }



 });*/


 
 server.get("/account/:id", (req, res) => {
    
    const itemId = req.params.id;
    var dataname='Account_number';
  
    const bankdata =bank.Account.find(account=>account[dataname]===itemId);
 
    if (bankdata) {
       res.json(bankdata);
    } else {
       res.json({ message: `item ${itemId} doesn't exist`})
    }



 });

 server.get("/account/:id/:options", (req, res) => {
    //receive more variable by get request
   var data = {
      "accountdata": {
          "item_param":req.params.id,
          "options":req.params.options,
      }
  }; 


    //add dynamic option without if conditions

   const options = data.accountdata.options;
   
  

   //var dataname='Account_number';
   var dataname=options;//this is to make object parameters dynamic(ex:if Account_number it means that it will check Account number parameters under bank,js)
  
    const bankdata =bank.Account.find(account=>account[dataname]===data.accountdata.item_param);//check if object is available
 
    if (bankdata) {
       res.json(bankdata);
    } else {
       res.json({ message:"1"})
    }
  
 //if(data.accountdata.options=='Account_infos')



});
 

 server.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
 });



 
 const port = 8000;

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});