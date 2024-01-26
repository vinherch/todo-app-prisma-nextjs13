const bcrypt = require("bcrypt");

export const hashPassword = async (password: string) => {
  const SALT_ROUNDS = 10;
  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  return hash;
};

export const compare = async (hash: string, password: string) => {
  return await bcrypt.compare(hash, password);
};
