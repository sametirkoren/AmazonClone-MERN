const app = require('./app');
const dotenv = require('dotenv');

// Config dosyası ayarları

dotenv.config({path : 'backend/config/config.env'});


app.listen(process.env.PORT,()=> {
    console.log(`Server started on PORT : ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})