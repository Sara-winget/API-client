const mongoose=require('mongoose')



module.exports=async()=>{
    const ConnectDB={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try{
        await mongoose.connect(process.env.MONGO_URL,ConnectDB)
        console.log('MongoDB connected successfully')
    }
catch(e){
    console.log(`error : ${e.message}`)
}
}