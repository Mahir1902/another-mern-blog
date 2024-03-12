import { StatusCodes } from "http-status-codes";
import { HttpException } from "./roots";


export class InternalException extends HttpException {
    constructor(message:string, errorCode:number, error:any) {
        super(message, errorCode, StatusCodes.INTERNAL_SERVER_ERROR, error);
    }
}