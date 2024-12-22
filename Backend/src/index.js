import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './.env'
});
// done

connectDB().then(()=>{
    //  db is connected but express not able to connect thata why we did (listen --> error)
    app.on("errror", (error) => {
        console.log("ERRR error: ", error);
        throw error
    })
    // if (DB and Express) is working
    // listen to port using express
    app.listen(process.env.PORT || 8000, () => {
        console.log(`App is listening to PORT ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log("Mongo DB Connection failed in index.js :  " , err );
    
});