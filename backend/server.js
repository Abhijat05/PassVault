import express from 'express';
import 'dotenv/config';
import { Collection, MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import cors from 'cors';

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = process.env.DB_NAME;
const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use(cors())

await client.connect();

// Get the documents collection
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const Collection = db.collection('Passwords');
    const findResult = await Collection.find({}).toArray();
    res.send(findResult);
})
//Save the document to the database
app.post('/', async (req, res) => {
    const pasword = req.body;
    const db = client.db(dbName);
    const Collection = db.collection('Passwords');
    const findResult = await Collection.insertOne(pasword);
    res.send({success: true, result: findResult});
})
//Delete the document from the database
app.delete('/', async (req, res) => {
    const pasword = req.body;
    const db = client.db(dbName);
    const Collection = db.collection('Passwords');
    const findResult = await Collection.deleteOne(pasword);
    res.send({success: true, result: findResult});
})

app.listen(PORT, () => {
    
    console.log(`Server is running on http://localhost:${PORT}`);
})