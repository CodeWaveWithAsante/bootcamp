import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export const hashPassword = async (userPassword) => {
  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(userPassword, salt);

  return hashedPassword;
};

export const comparePasswords = async (userPassword, hashedPassword) => {
  const isMatch = await bcrypt.compare(userPassword, hashedPassword);

  return isMatch;
};

export const createJWT = (userId) => {
  const token = JWT.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};
