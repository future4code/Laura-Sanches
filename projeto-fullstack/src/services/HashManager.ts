import * as bcrypt from 'bcryptjs';

export class HashManager{
    async hash(text: string): Promise<string>{
        const rounds= 12;
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(text, salt);
        return result;
    }

    async compare(text: string, hash: string): Promise<boolean>{
        return await bcrypt.compare(text, hash);
    }

}