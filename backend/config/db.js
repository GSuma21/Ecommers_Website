require('dotenv').config()
const mongoose = require('mongoose')
URI="mongodb+srv://user-321:user-321@mini-mern.zj3vz.mongodb.net/shop?retryWrites=true&w=majority"

const connectDB = async () =>{
    try{
        await mongoose.connect(URI,{
            useNewUrlParser: true,
           
        });

        console.log("MongoDB connection Success")
    }catch(error){
        console.log(error)
        process.exit(1);

    }
}


module.exports = connectDB;
