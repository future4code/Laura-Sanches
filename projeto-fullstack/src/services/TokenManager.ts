import { RSA_PKCS1_OAEP_PADDING } from 'constants';
import * as jwt from 'jsonwebtoken';

export class TokenManager{
    generate(id: string): string{

        return jwt.sign({
            id: id
        },
        "LAURA",
        {expiresIn: "1d"})

    }

    get(token: string): object{
        const payload = jwt.verify(token, "LAURA")
        return payload as object;

    }
}