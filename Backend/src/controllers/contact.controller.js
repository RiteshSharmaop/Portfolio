import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Complaint } from "../models/contack.model.js";

const contact = asyncHandler(async (req ,res)=> {
    const {name , number , email , message} = req.body;

    
    if(!(email && number)){
        throw new ApiError(404 , "Enter Email Or Number");
    }
    
    const complaints = await Complaint.create({
        name: name,
        email: email,
        number: number,
        description: message
    })
    
    
    res.redirect('http://localhost:5173');
    // returnc
    // .status(200)
    // .json(
    //     new ApiResponse(200 , {complaints }, "complaints fetched")
    // )
});

export { contact };