//validationSchema

import { NextFunction, Request, Response } from "express"
import z from "zod"

cost validateRequest = (schema:z.ZodTypeAny) =>{
    return (req: Request, res: Response, next: NextFunction)=>{
        try{
const result = schema.safeParse(req.body);
        }
    };
}