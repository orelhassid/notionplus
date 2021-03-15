import dotenv from "dotenv";
dotenv.config();

export const SECRET = process.env.SECRET;
export const expiresIn = "5h";
export const CLIENT_ID = process.env.CLIENT_ID;
