# Password-Vault (VueJS + NodeJS + DynamoDB)

A Password Vault where you can store and retrieve your stored credentials such as email/username and password. Do keep in mind that the data is stored without any kind of encryption. Its a simple CRUD application with basic functionalities.


## Tech Stack
FrontEnd: VueJS (Vue 2, Vuetify 2)

Backend:  NodeJS (ExpressJS)

Database: DynamoDB (AWS)


## FrontEnd Design
HOME: You can enter your Email/Username to: 
          
          - CREATE new Email/Username & Password (Axios POST)
          - UPDATE existing Email/Username & Password (Axios POST)
          - DELETE existing Email/Username & Password with Email/Username (Axios DELETE)
          
ABOUT:    View the functionalities of the Application

LIST:     View all the stored credentials from Database:

          - RETRIEVE existing Email/Username & Password (Axios GET)


## BackEnd Design
.env          -   Contains the Credentials for your AWS account

server.js     -   Face of your BackEnd, API calls from the FrontEnd are recieved here

user.controller.js - Manages request and response (called by server.js)

user.service.js - Manages logic such as manipulation of data, validation, etc (called by user.controller.js)

user.repository.js - Manages database operations (called by user.service.js)

database.js - Contains the configuration for your AWS account and can be used for DB Operations



# Packages Used:
## FrontEnd

    npm
    vue
    vuetify
    vue-router
    

## BackEnd

    npm
    nodemon
    express
    body-parser
    cors
    aws-sdk


## To Run (Terminal)
      
      FrontEnd: Folder 'vault'         - npm run serve  -   Port 8080
      
      BackEnd : Folder 'vault-backend' - npm run dev    -   Port 8088
      
      
