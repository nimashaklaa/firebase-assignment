import {https as httpV2} from "firebase-functions/v2";
//this is a cloud function
export const helloFireWorld = httpV2.onRequest((request, response)=>{
    response.json({data:'Hello Fire World'
        }
    )})