const { deleteByEmail } = require('../repository/user.repository');
const UserService = require('../service/user.service');

class UserController {

    async findByPass(req, res) {
        console.log("Find pass: Recieved from server.js: ");
        console.log(req.body);

        const data = await UserService.findByPass(req.body);

        return data;
    }
    
    async findByEmail(req, res) {

        console.log("Find: Recieved from server.js: ");
        console.log(req.body);

        const data = await UserService.findByEmail(req.body);

        return data;
    }

    async create(req, res) {

        console.log("Create: Recieved from server.js: ");
        console.log(req.body);

        const data = await UserService.create(req.body);
        console.log("cr: ", data);

        return data;
    }

    async update(req, res) {

        console.log("Update: Recieved from server.js: ");
        console.log(req.body);

        const data = await UserService.update(req.body);
        console.log("up: ", data);

        return data;
    }

    async deleteRecord(req, res) {

        console.log("Delete: Recieved from server.js: ");
        console.log(req.body);

        const data = await UserService.deleteRecord(req.body.email);
        console.log("dl: ", data);

        return "Successfully Deleted!!!";
    }

}



module.exports = new UserController();