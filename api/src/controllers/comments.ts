import { NextFunction, Request, Response } from "express";
import { tryCatch } from "../utils/tryCatch";
import prisma from "../utils/prismaClient";
import { StatusCodes } from "http-status-codes";


export const getComments = tryCatch(async (req:Request, res:Response, next:NextFunction) => {

    const {title} = req.query

    const comments = await prisma.comment.findMany({
        where: {
            postSlug: title as string
        },
        include: {
            user: true
        }
    })

    console.log(title)

    res.status(StatusCodes.OK).json(comments)


})


export const addComment = tryCatch(async (req:Request, res:Response, next:NextFunction) => {
    const jwt = req.cookies.jwt

    if(!jwt) {
        return res.status(StatusCodes.UNAUTHORIZED).json({message: 'You need to be logged in to comment'})
    }

    const {postSlug, desc, username} = req.body

    const comment = await prisma.comment.create({
        data: {
            desc,
            // Connect the comment to the post using the postSlug
            post: {
                connect: {
                    slug: postSlug, // Assuming the slug field is the unique identifier for posts
                },
            },
            // Connect the comment to the user using the username
            user: {
                connect: {
                    username: username,
                },
            },
        },
    });

    res.status(StatusCodes.CREATED).json(comment)
})