import * as jwt from "jsonwebtoken";

export function generateToken(id: string): string {

    const token: string = jwt.sign({id},
         process.env.JWT_KEY as string,
         {expiresIn: "1y"});

    return token;
}

export function getTokenData(token: string): AuthenticationData{
    const payload = jwt.verify(token, process.env.JWT_KEY!);
    return payload as AuthenticationData;
}

export type AuthenticationData = {
    id: string
}
