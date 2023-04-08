export default class CustomError extends Error {
    req: boolean;
    field: string[];
    constructor(message: string, req: boolean, field: string[]) {
        super(message);
        this.req = req;
        this.field = field;
    };
};
