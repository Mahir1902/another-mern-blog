import { ErrorCodes, HttpException } from "./roots";
import { StatusCodes } from "http-status-codes";

export class BadRequest extends HttpException {
    constructor(message:string, errorCode:ErrorCodes) {
        super(message, errorCode, StatusCodes.BAD_REQUEST, null);
    }
}