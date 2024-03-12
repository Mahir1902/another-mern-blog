



export class HttpException extends Error {
  message: string;
  errorCode: any;
  statusCode: number;
  errors: any;

  constructor(message: string, errorCode: ErrorCodes, statusCode: number, errors: any) {
    super(message);
    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.errors = errors;
  }
}


export enum ErrorCodes {
    USER_NOT_FOUND = 1001,
    USER_ALREADY_EXISTS = 1002,
    INVALID_PASSWORD = 1003,
    UNPROCESSABLE_ENTITY = 1004,
    INTERNAL_EXCEPTION = 3001,
    UNAUTHORIZED = 401,
    NO_POSTS = 4001
}

