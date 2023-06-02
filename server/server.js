import express from "express";
import mysql from "mysql";
import cors from "cors";


//CONNECTION, SETUP

const server = express();
server.use(express.json());
const port = 8600;

server.listen (port, function(){
    console.log("Server started on port", port);
})
server.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'E-commerce'
})

db.connect (function(error){
    if (error) {
        console.log("Connection to SQL failed", error)
    } else {
        console.log ("Successfully connected to SQL db")
    }
})


// CRUD

server.get('/seebouquets', function (req, res){
    let SQLquery = 'CALL `getAllProducts`()';

    db.query(SQLquery, function(error, data){
        if (error) {
            res.json({error_message: error})
        } else {
            res.json({bouquets:data})
        }
    })
})

server.post('/addbouquet', function (req,res){
    let SQLquery = 'CALL `createProduct`(?, ?, ?, ?, ?)';

    db.query(SQLquery, [req.body.name, req.body.description, req.body.price, req.body.stock, req.body.image], function(error, data){
        if (error) {
            res.json({error_message:error})
        } else {
            res.json({message: 'product added', data: data})
        }

        if({message: 'product added', data: data}){
            res.json(true)
        }
    })
})

server.put('/updatebouqprice', function(req,res){
    let SQLquery = ' CALL `updateProduct`(?, ?, ?, ?, ?, ?)';

    db.query(SQLquery, [req.body.id, req.body.name, req.body.description, req.body.price, req.body.stock, req.body.image], function (error,data){
        if (error) {
            res.json({error_message:error})
        } else {
            res.json({data})
        }
    })
})

server.delete('/deletebouquet', function (req,res){
    let SQLquery = 'CALL `deleteProduct`(?)';

    db.query(SQLquery, [req.body.id], function (error,data){
        if (error) {
            res.json ({error_message:error})
        } else {
            res.json ({message:data})
        }
    })
})

server.post ('/bouquets', function (req,res){
    let name = req.body.name
    let image = req.body.image
    let description = req.body.description
    let price = req.body.price
    let stock = req.body.stock

    let SQLInsertQuery = 'CALL `createProduct`(?, ?, ?, ?, ?)'

    db.query(SQLInsertQuery, [image, name, description, price, stock], function(error, data){
        if (error) {
            res.json({error_message:error})
        } else {
            res.json({message:"success", data: data})
        }
    })
    })


//GET ALL
server.get('/bouquets', (req,res) => {
    let SQLquery = 'CALL `getAllProducts`()';

    db.query(SQLquery, function(error, data){
        if (error) {
            res.json({error_message: error})
        } else {
            res.json({bouquets:data[0]})
        }})
})


//GET BY PROD ID
server.get('/bouquets/:id/', (req,res) => {
    let SQLquery = 'CALL `getProductByID`(?)';
    db.query(SQLquery, [req.params.id], (error,data) => {
        (error) ? res.json( { error_message: error } ) : res.json( { message: data[0][0] } )
        //in data if [0] -- won't take meta data
    })
    // let reqID = req.params.id;

    // console.log(reqID)

    //Send it back
    // res.json({id:reqID})

    // res.json({id: req.params.id, title: req.body.title})


})


//PUT  by prod id

server.put('/bouquets/:id', (req, res) => {
    let SQLquery = ' CALL `updateProduct`(?, ?, ?, ?, ?, ?)';

    db.query(SQLquery, [req.params.id, req.body.name, req.body.description, req.body.price, req.body.stock, req.body.image], function (error,data){
        if (error) {
            res.json({error_message:error})
        } else {
            res.json({data})
        }
    })
})

//PUT -- Update Stock by id

server.put('/updatestock/:id', (req, res) => {
    let SQLquery = 'CALL `updateStock`(?, ?)';

    db.query(SQLquery, [req.params.id, req.body.stock], function (error,data){
        if (error) {
            res.json({error_message:error})
        } else {
            res.json({data}, true)
        }
    })
})

//PUT -- Update Product Display by ID

server.put('/updatedisplay/:id', (req, res) => {
    let SQLquery = 'CALL `updateDisplay`(?, ?)'

    db.query (SQLquery, [req.params.id, req.body.display], (error, data) => {
        if (error) {
            res.json ({error_message:error})
        } else {
            res.json({message: 'updated', data:data})
        }
    })


})


// DELETE by prod id

server.delete('/bouquets/:id', (req, res) => {
    let SQLquery = 'CALL `deleteProduct`(?)';
    db.query(SQLquery, [req.params.id], (error, data) => {
        (error) ? res.json({ error_message: error }) : res.json([{ message: "deleted", data: data }])
    })
})


//USER LOGIN VALIDATION 

//sending request to check the match
server.post('/validateuser', (req, res) => {
    let SQLquery = ' CALL `validateUser`(?, ?)';
    //(input email || password != DB email || password) ? no data : [{}] with data
    db.query(SQLquery, [req.body.email, req.body.password], (error, data) => {
        // (error) ? res.json({error_message: error}) : res.json (data[0].length > 0) ?  res.json(true) : res.json(false)
        if (error){
            res.json({error_message: error})
        } else {
            if (data[0].length>0) {
                res.json (true)
            } else {
                res.json(false)
            }
        }
    
            //shows whether they match or not
            ;
    })
})




//ETIQUETTE

server.post ('/bouquets', function (req,res){
    let name = req.body.name
    let image = req.body.image
    let description = req.body.description
    let price = req.body.price
    let stock = req.body.stock

    let SQLInsertQuery = 'CALL `createProduct`(?, ?, ?, ?, ?)'

    db.query(SQLInsertQuery, [image, name, description, price, stock], function(error, data){
        if (error) {
            res.json({error_message:error})
        } else {
            res.json({message:"success", data: data})
        }
    })
    })


//GET ALL
server.get('/bouquets', (req,res) => {
    let SQLquery = 'CALL `getAllProducts`()';

    db.query(SQLquery, function(error, data){
        if (error) {
            res.json({error_message: error})
        } else {
            res.json({bouquets:data[0]})
        }})
})


//GET BY PROD ID
server.get('/bouquets/:id/', (req,res) => {
    let SQLquery = 'CALL `getProductByID`(?)';
    db.query(SQLquery, [req.params.id], (error,data) => {
        (error) ? res.json( { error_message: error } ) : res.json( { message: data[0][0] } )
        //in data if [0] -- won't take meta data
    })
    // let reqID = req.params.id;

    // console.log(reqID)

    //Send it back
    // res.json({id:reqID})

    // res.json({id: req.params.id, name: req.body.name})


})


//PUT  by prod id

server.put('/bouquets/:id', (req, res) => {
    let SQLquery = ' CALL `updateProduct`(?, ?, ?, ?, ?, ?)';

    db.query(SQLquery, [req.params.id, req.body.name, req.body.description, req.body.price, req.body.stock, req.body.image], function (error,data){
        if (error) {
            res.json({error_message:error})
        } else {
            res.json({data})
        }
    })
})

// DELETE by prod id

server.delete('/bouquets/:id', (req, res) => {
    let SQLquery = 'CALL `deleteProduct`(?)';
    db.query(SQLquery, [req.params.id], (error, data) => {
        (error) ? res.json({ error_message: error }) : res.json({ message: "deleted", data: data })
    })
})


//USER LOGIN VALIDATION 

server.post('/validateuser', (req, res) => {
    let SQLquery = ' CALL `validateUser`(?, ?)';
    //(input email || password != DB email || password) ? no data : [{}] with data
    db.query(SQLquery, [req.body.email, req.body.password], (error, data) => {
        // (error) ? res.json({error_message: error}) : res.json (data[0].length > 0) ?  res.json(true) : res.json(false)
        if (error){
            res.json({error_message: error})
        } else {
            if (data[0].length>0) {
                res.json (true)
            } else {
                res.json(false)
            }
        }
            ;
    })
})