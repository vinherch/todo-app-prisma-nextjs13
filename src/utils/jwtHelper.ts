import { SignJWT, jwtVerify } from "jose";

export const signJWT = (payload: {}, options: { exp: string }) => {
  const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
  try {
    return new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setExpirationTime(options.exp).setIssuedAt().sign(secret);
  } catch (error) {
    throw error;
  }
};

export const verifyJWT = async <T>(token: string): Promise<T> => {
  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(process.env.TOKEN_SECRET));
    return verified.payload as T;
  } catch (error) {
    throw new Error("Token expired");
  }
};
