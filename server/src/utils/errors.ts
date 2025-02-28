export class ApplicationError extends Error {
    constructor(public message: string, public statusCode: number) {
        super(message)
    }
}

export class DataAccessError extends ApplicationError {
    constructor(message: string) {
        super(message, 500)
    }
}
