var AWS = require('aws-sdk');

AWS.config.update({
    region: 'ap-southeast-1',
    accessKeyId: process.env.AWS_ACCESSID,
    secretAccessKey: process.env.AWS_SECRETKEY,
});

const db = new AWS.DynamoDB.DocumentClient();

module.exports = {db};