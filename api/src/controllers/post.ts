import { NextFunction, Request, Response } from "express";
import { tryCatch } from "../utils/tryCatch";
import prisma from "../utils/prismaClient";
import { BadRequest } from "../exceptions/bad-requests";
import { ErrorCodes } from "../exceptions/roots";
import { StatusCodes } from "http-status-codes";




export const getPosts = tryCatch( async (req:Request, res:Response, next:NextFunction) => {
    const posts = await prisma.post.findMany()

    if(!posts) {
        return next(new BadRequest('No posts found', ErrorCodes.NO_POSTS ))
    }

    res.status(StatusCodes.OK).json(posts)
})