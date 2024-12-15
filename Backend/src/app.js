import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"


// create app
const app = express();


// configuration
// .use used for 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
    
}))

app.use(express.json({limit: "32kb"}));
app.use(express.urlencoded({extended: true , limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());



// routes
import contactRouter from "./routes/contact.routes.js"



app.use("/c" , contactRouter);

export {app};