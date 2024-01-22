import {https as httpV2} from "firebase-functions/v2";
export const helloFireWorld = httpV2.onRequest((request, response)=>{
    response.json({data:'Hello Fire World'
        }
    )})