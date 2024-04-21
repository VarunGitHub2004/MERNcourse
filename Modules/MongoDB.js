//Setting database in node js
import assert from "assert"
import mongodb from 'mongodb'
const MongoClient =mongodb.MongoClient()

//Connection url
const url="mongodb://localhost:27017"

//Database name
const dbName="mongodemodatabase"

//use connect method to connect to the server
MongoClient.connect(url,function(err,client){
    assert.equal(null,err)
    console.log("Connected Correctly to the server")
    const db=client.db(dbName)
})
