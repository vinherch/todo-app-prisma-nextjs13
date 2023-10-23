import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const hashPassword = async (password: string) => {
  const SALT_ROUNDS = 10;
  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  return hash;
};

export const compare = async (hash: string, password: string) => {
  return await bcrypt.compare(hash, password);
};

export const signJWT = async (user: { id: number; email: string; firstname: string; lastname: string; created: string; updated: string }) => {
  return await jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "10m" });
};
