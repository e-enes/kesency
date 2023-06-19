import CustomError from "./error/Error";

enum FieldName {
    Fname = "fname",
    Email = "email",
    Phone = "phone",
    Website = "website",
    Message = "message"
}

const ERROR_MESSAGES: Record<FieldName, string> = {
    [FieldName.Fname]: "Full name can not be empty!",
    [FieldName.Email]: "Please put a valid email address!",
    [FieldName.Phone]: "Please put a valid phone number!",
    [FieldName.Website]: "Please put a valid website!",
    [FieldName.Message]: "Message can not be empty!"
};

const REGEX_EMAIL: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;
const REGEX_PHONE: RegExp = /^\+?\d{1,3}[-.\s]?\d{3,4}[-.\s]?\d{4}$/;
const REGEX_IP: RegExp = /\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/;
const AUTH_TOKEN: string = "IrBeX8Pkor#gd6YAWE2pH8f&8H%^#Sim3Zew^K8R@6uYKC@c*!";

const DEFAULT_VALUES = {
    phone: "000 000 000",
    website: "none"
};

interface ContactResponse {
    error: boolean;
    field: string[];
    message: string;
    code: boolean;
}

export async function contact(fname: string, email: string, phone: string, website: string, message: string): Promise<ContactResponse> {
    const errors = {
        fname: !fname,
        email: !REGEX_EMAIL.test(email),
        phone: phone === "" ? false : !REGEX_PHONE.test(phone),
        website: website === "" ? false : !website.includes("https://"),
        message: !message
    };

    const errorFields: FieldName[] = [];
    for (const [key, value] of Object.entries(errors)) {
        if (value) {
            errorFields.push(key as FieldName);
            const message = ERROR_MESSAGES[key as FieldName];
            throw new CustomError(message, false, [key as FieldName]);
        }
    };

    const getIP = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
    const data = await getIP.text();
    const adresseIP = data.match(REGEX_IP)![0];

    try {
        const register = await fetch("https://api.kesency.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": AUTH_TOKEN
            },
            body: JSON.stringify({
                fname: fname,
                email: email,
                phone: phone ?? DEFAULT_VALUES.phone,
                website: website ?? DEFAULT_VALUES.website,
                message: message,
                adresseIP: adresseIP
            })
        });

        const res = await register.json();

        return {
            error: res.error,
            field: ["fname", "email", phone === "" ? "none" : "website", website === "" ? "none" : "website", "message"],
            message: res.message,
            code: true
        };
    } catch (error) {
        const fields: FieldName[] = [FieldName.Fname, FieldName.Email, FieldName.Message];

        if (phone) fields.push(FieldName.Phone);
        if (website) fields.push(FieldName.Website);

        throw new CustomError("Error sending message! " + error, true, fields);
    }
}