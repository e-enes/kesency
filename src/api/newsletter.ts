import CustomError from "./error/Error";

enum FieldName {
    Fname = "fname-newsletter",
    Email = "email-newsletter",
}

const ERROR_MESSAGES: Record<FieldName, string> = {
    [FieldName.Fname]: "Full name can not be empty!",
    [FieldName.Email]: "Please put a valid email address!",
};

const REGEX_EMAIL: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;
const REGEX_IP: RegExp = /\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/;
const AUTH_TOKEN: string = "IrBeX8Pkor#gd6YAWE2pH8f&8H%^#Sim3Zew^K8R@6uYKC@c*!";

interface NewsletterResponse {
    error: boolean;
    field: FieldName[];
    message: string;
    code: boolean;
}

export async function newsletter(fname: string, email: string): Promise<NewsletterResponse> {
    const errors = {
        fname: !fname,
        email: !email.match(REGEX_EMAIL),
    };

    if (errors.fname) {
        throw new CustomError(ERROR_MESSAGES[FieldName.Fname], false, [FieldName.Fname]);
    }

    if (errors.email) {
        throw new CustomError(ERROR_MESSAGES[FieldName.Email], false, [FieldName.Email]);
    }

    const getIP = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
    const data = await getIP.text();
    const adresseIP = data.match(REGEX_IP)![0];

    try {
        const register = await fetch("https://api.kesency.com/newsletter/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: AUTH_TOKEN,
            },
            body: JSON.stringify({
                fname,
                email,
                adresseIP,
            }),
        });

        const res = await register.json();
        return {
            error: res.error,
            field: [FieldName.Fname, FieldName.Email],
            message: res.message,
            code: true,
        };
    } catch (error) {
        throw new CustomError(`Error registering for newsletter! ${error}`, true, [FieldName.Fname, FieldName.Email]);
    }
}