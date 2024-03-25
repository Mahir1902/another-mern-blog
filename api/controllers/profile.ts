import { NextFunction, Request, Response } from "express";
import { tryCatch } from "../utils/tryCatch";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../secrets";
import { StatusCodes } from "http-status-codes";
import { BadRequest } from "../exceptions/bad-requests";
import { ErrorCodes } from "../exceptions/roots";


export const getProfile = async (req:Request, res:Response, next:NextFunction) => {
    console.log(req.cookies.jwt)

    const token = req.cookies.jwt

    jwt.verify(token, JWT_SECRET!, {}, (err, payload) => {
        if(err) {
            next(new BadRequest('You must be logged in', ErrorCodes.UNAUTHORIZED))
        }else {

            res.status(StatusCodes.OK).json(payload)
            console.log(payload)
        }
    })  
}