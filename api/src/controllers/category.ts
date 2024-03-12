import { NextFunction, Request, Response } from "express";
import { tryCatch } from "../utils/tryCatch";
import prisma from "../utils/prismaClient";
import { StatusCodes } from "http-status-codes";





export const getCategory = tryCatch(async (req:Request, res:Response, next:NextFunction) => {
    const categories = await prisma.category.findMany()

    res.status(StatusCodes.OK).json(categories)
})