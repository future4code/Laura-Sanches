import * as jwt from "jsonwebtoken";
export function generateToken(
   payload: AuthenticationData
): string {
   const token: string = jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      { expiresIn: "1y" }
   );
   return token;
}
export function getTokenData(token: string): AuthenticationData {
   const payload = jwt.verify(
      token,
      process.env.JWT_KEY!
   ) as AuthenticationData
   return {
      id: payload.id,
   }
}
export type AuthenticationData = {
   id: string,
}