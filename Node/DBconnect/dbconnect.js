const { MongoClient, Collection } = require('mongodb');

// // Connection URI
// const uri = "mongodb://localhost:27017"; // Replace with your MongoDB URI

// // Database and Collection Names
// const dbName = "myDatabase";
// const collectionName = "myCollection";

// async function main() {
//     // Create a new MongoClient
//     const client = new MongoClient(uri);

//     try {
//         // Connect to the MongoDB server
//         await client.connect();
//         console.log("Connected successfully to MongoDB");

//         // Access the database and collection
//         const db = client.db(dbName);
//         const collection = db.collection(collectionName);

//         // Example Operation: Insert a document
//         const result = await collection.insertOne({ name: "John", age: 30 });
//         console.log(`Document inserted with _id: ${result.insertedId}`);
//     } catch (err) {
//         console.error("Connection failed:", err);
//     } finally {
//         // Close the connection
//         await client.close();
//     }
// }

// main().catch(console.error);


let connectDb = async()=>{
    const connection =  new MongoClient('mongodb://127.0.0.1:27017');
    await connection.connect();

    console.log('connected');
    const db = connection.db('demo_db_again');
    console.log('db createed');
    let collection=db.createCollection('student_school');
    console.log('collection created');
    
    // connection.close();
    // insert one data
    //let singleData = await collection.insertOne({course:'node js', duration:'3 months'});
    //console.log("data inserted", singleData);

    

//insert more than one data
//     let multipleData=await (await collection).insertMany([{course:'node js', duration:'3 months'}
//          ,{course:'react js', duration:'3 months'}
//          ,{course:'angular js', duration:'3 months'}
//      ]);
//  console.log("data inserted", multipleData);




//read one data
// let singleData = await collection.findOne({course:'node js'});
// console.log(singleData);



//read all data
//let multipleData = await collection.find().toArray()
//console.log(multipleData);

//let multipleData= await collection.find({course:'node js'}).toArray();
//console.log(multipleData);


//update data
//let updatesingleData=(await collection).updateOne({course:'node js'},{$set:{duration:'2 months'}});
//console.log(updatesingleData);


//update all data
//let updatemultpleData=(await collection).updateMany({course:'react js'},{$set:{price:'30000'}});
//console.log(updatemultpleData);


//delete
//let deletesingleData=(await collection).deleteOne({course:'node js'});
//console.log(deletesingleData);


//delete all data
//let deletemultpleData=(await collection).deleteMany({price:'30000'});
//console.log(deletemultpleData);







}

connectDb();






const http=require('http');
const server=http.createServer((req,res)=>{
    
    res.end('server is running on port 5000');
})



server.listen(5000,err=>{
    if (err)
    console.log('server is running on port 5000');
})
















// const { MongoClient } = require('mongodb');

// const connectDb = async () => {
//     try {
//         // Correct connection URI
//         const connection = new MongoClient('mongodb://127.0.0.1:27017');
        
//         // Connect to MongoDB
//         await connection.connect();
//         console.log('Connected to MongoDB');

//         // Specify the database name as a string
//         const db = connection.db('demo_db');
//         console.log('Database created or accessed:', db.databaseName);

//         // Perform operations here, if needed

//         // Close the connection (optional, for single-use scripts)
//         await connection.close();
//         console.log('Connection closed');
//     } catch (err) {
//         console.error('Error connecting to MongoDB:', err.message);
//     }
// };

// connectDb();
