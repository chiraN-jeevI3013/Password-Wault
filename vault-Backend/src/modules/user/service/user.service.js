const UserRepository = require('../repository/user.repository');

class UserService {

    async findByPass(data) {
        console.log("Find pass: Recieved from user.controller.js: ");
        console.log(data);

        //removing spaces in email
        var newEmail = (data.email).replace(/\s+/g,'');

        const retdata = await UserRepository.findByEmail(newEmail);

        console.log("(pass) data from DB::: ", data);

        console.log("retdata.Item.Password::data.pass ", retdata.Item.Password, data.pass);
        if(retdata.Item.Password === data.pass) {
            return true;
        }
        return false;
    }

    async findByEmail(data) {

        console.log("Find: Recieved from user.controller.js: ");
        console.log(data.email);

        //removing spaces in email
        var newEmail = (data.email).replace(/\s+/g,'');

        const retdata = await UserRepository.findByEmail(newEmail);

        console.log("data from DB::: ", retdata);

        if(retdata && retdata.Item)
            return true;
        return false;
    }

    async create(data) {

        console.log("Create: Recieved from user.controller.js: ");
        console.log(data);

        //removing spaces in email & pass
        var newEmail = (data.email).replace(/\s+/g,'');
        var newPass = (data.pass).replace(/\s+/g,'');

        return await UserRepository.create({
            Email: newEmail,
            Password: newPass
        });
    }

    async update(data) {

        console.log("Update: Recieved from user.controller.js: ");
        console.log( data);

        //removing spaces in email & pass
        var newEmail = (data.email).replace(/\s+/g,'');
        var newPass = (data.pass).replace(/\s+/g,'');

        return await UserRepository.update(newEmail, {
            Password: newPass
        });

    }

    async deleteRecord(Email) {

        console.log("Delete: Recieved from user.controller.js: ");
        console.log(Email);

        //removing spaces in email & pass
        var newEmail = (Email).replace(/\s+/g,'');
        // var newPass = (data.pass).replace(/\s+/g,'');

        // return await UserRepository.deleteRecord({
        //     email: newEmail,
        //     // pass: newPass
        // });

        return await UserRepository.deleteRecord(newEmail);
    }

}



module.exports = new UserService();