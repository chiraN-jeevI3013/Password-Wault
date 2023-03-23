const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
require('dotenv').config();


const UserController = require('../vault-Backend/src/modules/user/controller/user.controller');
const UserRepository = require('../vault-Backend/src/modules/user/repository/user.repository');


var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to your Vault" })
    // return res.status(200).send({
    //     message: 'Welcome'
    // });
});


//DISPLAY STUFF IN LIST
app.get("/listData", async (req, res) => {

    console.log("List Data Requested:");

    const userData = await UserRepository.getAllUserData();

    console.log('userData in server.js: ', userData);

    return res.status(200).send(userData);

})


//CREATE
app.post("/createRecord", async (req, res) => {

    console.log("Received from Front-End: ")
    console.log( req.body)

    //EMAIL EXIST CHECK
    let doesEmailExist = await UserController.findByEmail(req);
    console.log("doesEmailExist: ", doesEmailExist);
    if(doesEmailExist==true){
        return res.status(200).send('EMAIL_EXISTS!'); 
    }

    //IF EMAIL DOES NOT EXIST
    let confirmation = UserController.create(req);
    
    return res.status(200).send({
        message: `Received credentials for ${req.body.email}`,
        confirmation: `${confirmation}`
    });
});

//UPDATE
app.post("/updateRecord", async (req, res) => {

    console.log("Update Requested from Front-End: ")
    console.log( req.body)

    //EMAIL EXIST CHECK
    let doesEmailExist = await UserController.findByEmail(req);
    console.log("doesEmailExist: ", doesEmailExist);
    if(doesEmailExist==false){

        UserController.create(req);

        return res.status(200).send('EMAIL_CREATED!'); 
    }

    //PASSWORD EXIST CHECK
    let doesPassExist = await UserController.findByPass(req);
    console.log("doesPassExist: ", doesPassExist);
    if(doesPassExist==true) {
        return res.status(200).send('PASS_EXISTS!');
    }

    let confirmation = UserController.update(req);

    return res.status(200).send({
        message: `Updated credentials for ${req.body.email}`,
        confirmation: `${confirmation}`
    });
});

//DELETE
app.delete("/deleteRecord/:id", async (req, res) => {

    console.log("Deletion Requested from Front-End: ")
    // console.log( req.body)
    const email = req.params.id;
    console.log("id from frontend-delete: ", email);

    const booody = {
        body: {
            email
        }
    }

    //EMAIL EXIST CHECK
    let doesEmailExist = await UserController.findByEmail(booody);
    console.log("doesEmailExist: ", doesEmailExist);
    if(doesEmailExist==false){
        return res.status(200).send('EMAIL_NOT_EXISTS!'); 
    }


    let confirmation = UserController.deleteRecord(booody);

    return res.status(200).send({
        message: `Deleted ${req.body.email} & ${req.body.pass}`,
        confirmation: `${confirmation}`
    });
});

const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});