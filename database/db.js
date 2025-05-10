const mongoose = require('mongoose')
const connectToDB = async()=>{
    try{
      await mongoose.connect(
        'mongodb+srv://hadiza:TUsPmgCuWStTpBFU@cluster0.znfae92.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        ,console.log('connected successfully')
      )  

    }catch(error){
        console.error('Mongodb connection fsiled', error);
        process.exit(1)
    }
}

module.exports = connectToDB