import {Request, Response, NextFunction, } from 'express';
import { UnprocessableEntity } from '../exceptions/validation';
import { ErrorCodes, HttpException } from '../exceptions/roots';
import { InternalException } from '../exceptions/internal-execption';
import { ZodError } from 'zod';



export const tryCatch = (controller:Function) => async (req:Request, res:Response, next:NextFunction) => {
    try {
        await controller(req, res, next)
    } catch (error:any) {
        console.log(error)
        
        if (error instanceof HttpException) {
            next(error)
        }
        else if( error instanceof ZodError) {
            const validationErrors = error.issues
            next(new UnprocessableEntity(validationErrors, 'Validation failed', ErrorCodes.UNPROCESSABLE_ENTITY))
        }
        else {
            next(new InternalException('Something went wrong', ErrorCodes.INTERNAL_EXCEPTION, error))
        }
       
    }
}