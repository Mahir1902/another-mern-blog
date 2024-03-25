import { StatusCodes } from "http-status-codes";
import { HttpException } from "./roots";

export class UnprocessableEntity extends HttpException {
    constructor(error:any, message:string, errorCode:number) {
        super(message, errorCode, StatusCodes.UNPROCESSABLE_ENTITY, error);
    }
}