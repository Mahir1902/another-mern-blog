import { NextFunction, Request, Response } from "express";
import { tryCatch } from "../utils/tryCatch";
import prisma from "../utils/prismaClient";
import { BadRequest } from "../exceptions/bad-requests";
import { ErrorCodes } from "../exceptions/roots";
import { StatusCodes } from "http-status-codes";

import jwt, { JwtPayload } from 'jsonwebtoken'
import { JWT_SECRET } from "../secrets";


export const getPosts = tryCatch( async (req:Request, res:Response, next:NextFunction) => {
    const posts = await prisma.post.findMany()

    if(!posts) {
        return next(new BadRequest('No posts found', ErrorCodes.NO_POSTS ))
    }

    res.status(StatusCodes.OK).json(posts)
})


export const getPostsByCategory = tryCatch( async (req:Request, res:Response, next:NextFunction) => {
    const {categoryName} = req.query

    const posts = await prisma.post.findMany({
        where: {
            catSlug: {
                equals: categoryName as string,
                mode: 'insensitive'
            }  
        }
    })

    if(!posts.length) {
        return next(new BadRequest('No posts found', ErrorCodes.NO_POSTS ))
    }

    res.status(StatusCodes.OK).json(posts)
})

/**
 * Retrieves a post by its title slug.
 * 
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next function.
 * @returns The post with the specified title slug.
 */
export const getPostByTitle = tryCatch( async (req:Request, res:Response, next:NextFunction) => {
    const {slug} = req.query
        
    console.log(slug)
    const post = await prisma.post.findUnique({
        where: {
            slug: slug as string
        },
        include: {
            user: true,
        }
        
    })

    if(!post) {
        return next(new BadRequest('No posts found', ErrorCodes.NO_POSTS ))
    }

    
    await prisma.post.update({
        where : {
            slug: slug as string,
        },
        data : {
            views: {
                increment: 1
            }
        }
    })

    res.status(StatusCodes.OK).json(post)
})



interface MyJwtPayload extends JwtPayload {
    username: string;
  }

export const createPost = tryCatch( async (req:Request, res:Response, next:NextFunction) => {
    const token = req.cookies.jwt

    

    if(!token) {
        return next(new BadRequest('You need to be logged in to create a post', ErrorCodes.UNAUTHORIZED ))
    }

    /**
 * Verifies a JWT token.
 * @param token - The JWT token to be verified.
 * @returns A promise that resolves to the payload of the JWT token.
 */
    const verifyToken = (token: string): Promise<MyJwtPayload> => {
        return new Promise((resolve, reject) => {
            jwt.verify(token, JWT_SECRET!, {}, (err, payload) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(payload as MyJwtPayload); // Here we are asserting the type
                }
            });
        });
    };

    const payload = await verifyToken(token)

    const {title, desc, catSlug, img, slug} = req.body

    const post = await prisma.post.create({
        data: {
            title: title as string,
            desc: desc as string,
            img: img as string,
            slug: slug as string,
              user: {
                connect: {
                     username: payload.username
                }
              },
              cat: {
                connect: {
                    slug: catSlug as string
                }
              } 
        }
    })

    res.status(StatusCodes.CREATED).json(post)
})