import mongoose from "mongoose";
 let isConnected = false;
 

 export const connectToDatabase = async () => {
    mongoose.set("strictQuery",true);
    if(isConnected){
        console.log("MongoDB Already connected");
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"share_prompts",
        })
        isConnected=true;
        console.log("MongoDB Already connected");

    }catch(error){
        console.log(error);

    }
 }