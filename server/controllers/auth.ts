import { Response, Request, NextFunction } from "express";


// import { compareSync, hashSync } from "bcryptjs";
// import jwt, {JwtPayload} from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";
import { BadRequest } from "../exceptions/bad-requests";
import { ErrorCodes } from "../exceptions/roots";
import { loginSchema, registerSchema } from "../schema/users";
import { tryCatch } from "../utils/tryCatch";
import { StatusCodes } from "http-status-codes";
import prisma from "../utils/prismaClient";
import { compareSync, hashSync } from "bcryptjs";
import jwt from 'jsonwebtoken'


export const login = tryCatch(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

    loginSchema.parse(req.body);

  const { usernameOrEmail, password } = req.body;

  let user = await prisma.user.findFirst({
    where: {
      OR: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    },
  });

  if (!user) {
    return next(new BadRequest("User does not exist", ErrorCodes.USER_NOT_FOUND));
  }

  if (!compareSync(password, user.hashedPassword)) {
    return next(new BadRequest("Incorrect password", ErrorCodes.INVALID_PASSWORD))
  }

  const token = jwt.sign(
    {
      userId: user.id,
      username: user.username
    },
    JWT_SECRET!
  );

  res.cookie('jwt', token, {httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000})

  res.status(StatusCodes.OK).json({ user });
});

export const register = tryCatch(async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    
      registerSchema.parse(req.body);
     
      const { email, username, password } = req.body;

    
  
      const emailExists = await prisma.user.findUnique({ where: { email } });

      const usernameExists = await prisma.user.findUnique({
        where: { username },
      });

      console.log(emailExists, usernameExists);
  
      if (emailExists !== null) {
       return next(
           new BadRequest("Email already exists", ErrorCodes.USER_ALREADY_EXISTS)
        );
      }

      if(usernameExists !== null) {
       return next(
            new BadRequest("Username is taken", ErrorCodes.USER_ALREADY_EXISTS)
        )
      }
  
      const user = await prisma.user.create({
        data: {
          email,
          username,
          hashedPassword: hashSync(password, 10),
        },
      });

      const token = jwt.sign({
        userId:  user.id,
        username: user.username
      }, JWT_SECRET!)
      res.cookie('jwt', token, {httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000})
      res.status(StatusCodes.CREATED).json({ username: user.username });
  }) 


  export const checkAuth = tryCatch(async (req:Request, res:Response, next:NextFunction) => {
      const token = req.cookies.jwt

      jwt.verify(token, JWT_SECRET!, {}, (err, payload) => {
          if(err) {
              return next(new BadRequest('Not authorized', ErrorCodes.UNAUTHORIZED))
          }

          res.status(StatusCodes.OK).json({isValid: true})
      })
  })


  export const logout = (req:Request, res:Response) => {
    res.clearCookie('jwt')
    res.status(StatusCodes.OK).json({message: 'Logged out successfully'})
  }
