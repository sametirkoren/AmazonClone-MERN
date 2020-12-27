const app = require('./app');
const connectDatabase = require('./config/database');
const dotenv = require('dotenv');

process.on('uncaughtException',err => {
    console.log(`Error : ${err.stack}`);
    console.log(`Shutting down due to uncaught exception`);
    process.exit(1);    
})

// Config dosyası ayarları

dotenv.config({path : 'backend/config/config.env'});


connectDatabase();

const server = app.listen(process.env.PORT,()=> {
    console.log(`Server started on PORT : ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})

process.on('unhandledRejection',err => {
    console.log(`Error  : ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise rejection`);
    server.close(()=> {
        process.exit(1);
    })
})