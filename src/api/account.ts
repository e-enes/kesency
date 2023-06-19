import CustomError from "./error/Error";

enum FieldName {
    Authorization = "authorization",
    Name = "name",
}

const ERROR_MESSAGES: Record<FieldName, string> = {
    [FieldName.Authorization]: "Authorization can not be empty!",
    [FieldName.Name]: "Name can not be empty!",
};

const REGEX_IP: RegExp = /\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/;
const AUTH_TOKEN: string = "IrBeX8Pkor#gd6YAWE2pH8f&8H%^#Sim3Zew^K8R@6uYKC@c*!";

interface AccountResponse {
    error: boolean;
    field: FieldName[];
    message: string;
    code: boolean;
}

export async function account(authorization: string, name: string): Promise<AccountResponse> {
    const errors = {
        authorization: !authorization,
        name: !name
    };

    if (errors.authorization) {
        throw new CustomError(ERROR_MESSAGES[FieldName.Authorization], false, [FieldName.Authorization]);
    }

    if (errors.name) {
        throw new CustomError(ERROR_MESSAGES[FieldName.Name], false, [FieldName.Name]);
    }

    const getIP = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
    const data = await getIP.text();
    const adresseIP = data.match(REGEX_IP)![0];

    try {
        const register = await fetch("https://api.kesency.com/login/account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: AUTH_TOKEN,
            },
            body: JSON.stringify({
                authorization,
                name,
                adresseIP,
            })
        });

        const res = await register.json();
        return {
            error: res.error,
            field: [FieldName.Authorization, FieldName.Name],
            message: res.message,
            code: true,
        };
    } catch (error) {
        throw new CustomError(`Error connecting! ${error}`, true, [FieldName.Authorization, FieldName.Name]);
    }
}