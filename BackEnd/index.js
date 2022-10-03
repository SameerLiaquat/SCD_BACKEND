var express = require('express');
const router = express();
console.log("HLEFERVFERGE")
const courses=[
{ id:1 ,name:'Sda'},
{ id:2 ,name:'ap'},
{ id:3 ,name:'algo'},

]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sameer' });
});

router.get('/sameer',(req,res)=>{
res.send("Lahore")
});


router.get('/courses/:id',(req,res)=>{
  const course=courses.find(c=> c.id===parseInt(req.params.id));
  if(!course)res.status(404).send('No course with the given id')
  res.send(course);
})
router.listen(3000,()=> console.log('listening'))

const os=require('os');
const { parse } = require('path');
console.log(os.hostname())

//mongoConnection
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'AndroidApp';

async function getData() {
  let result= await client.connect();
  console.log('Connected successfully to server');
  const db = result.db(dbName);
  let collection = db.collection('Accounts');
  let response=await collection.find({}).toArray();
  console.log(response);
}

getData();