class KesencyError extends Error {
  req: boolean;
  field: string[];
  date: Date;
  code: number;
  captcha: boolean;

  constructor(
    message: string,
    req: boolean,
    field: string[],
    date: Date,
    code: number,
    captcha: boolean
  ) {
    super(message);
    this.req = req;
    this.field = field;
    this.date = date;
    this.code = code;
    this.captcha = captcha;
  }
}

export { KesencyError };
