const {db} = require(`../../../helpers/database`);

class UserRepository {
    constructor() {
        this.tableName = 'SampleTableChumma';
    }

    async getAllUserData() {

        const params = {
            TableName: 'SampleTableChumma'
        }
    
        let response = await db.scan(params).promise().then((success) => {
            console.log('Successfully retrieved items from DB!');
            return success;
        }).catch((err) => {
            console.log('Error: ', err);
            return err;
        })
        console.log('response: ', response.Items);
        return response.Items;
        // {
        //     Items: [
        //       { Password: '1234', pk: 'weee@gmail.com' },
        //       { pk: 'abc@gmail.com', Password: 'pass' },
        //       { pk: 'yay@gmail.com', Password: 'pass' }
        //     ],
        //     Count: 3,
        //     ScannedCount: 3
        //   }
    }

    async findByEmail(Email) {

        console.log("Find: Recieved from user.service.js: ");
        console.log(Email);
        
        const params = {
            TableName: this.tableName,
            Key: {
                pk: Email,
            },
        };

        let x = await db.get(params).promise();
        return x;
    }

    async create(data) {

        console.log("Create: Recieved from user.service.js: ");
        console.log(data);

        const params = {
            TableName: this.tableName,
            Item: {
                pk: data.Email,
                Password: data.Password
            }
        };

        let user = await db.put(params).promise().then((success) => {
            console.log('Success : ', success);
            console.log(params.Item);
            return params.Item;
        }).catch((err) => {
            console.log('Error: ', err);
            return err;
        });

        return user;
    }

    async update(Email, data) {

        console.log("Update: Recieved from user.service.js: ");
        console.log(Email, " & " , data);


        const params = {
            TableName: this.tableName,
            Key: {
                pk: Email,
            },
            UpdateExpression: `set #Password = :Password`,
            ExpressionAttributeNames: {
                '#Password': `Password`
            },
            ExpressionAttributeValues: {
                ':Password': data.Password
            },
            ReturnValues: `UPDATED_NEW`
        };

        let userConf = await db.update(params).promise().then((success) => {
            console.log('Update Success : ', success);
            console.log(params.Key);
            return params.Key;
        }).catch((err) => {
            console.log('Error: ', err);
            return err;
        })

        return userConf;
    }

    async deleteRecord(Email) {

        console.log("Delete: Recieved from user.service.js: ");
        console.log(Email);

        const params = {
            TableName: this.tableName,
            Key: {
                pk: Email,
            }
        };

        let userDel = await db.delete(params).promise().then((success) => {
            console.log('Deleted : ', success);
            console.log("params: ", params);
            console.log("params.Key", params.Key);
            return params.Key;
        }).catch((err) => {
            console.log('Error: ', err);
            return err;
        })

        return userDel;
    }
}

module.exports = new UserRepository();