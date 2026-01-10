import { Request, Response } from "express";

export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // TODO:
  // 1. Check if user exists
  // 2. Hash password
  // 3. Save user in DB
  // 4. Generate JWT
  res.send({});
};

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // TODO:
  // 1. Check if user exists by email
  // 2. Compare password with stored hashed password
  // 3. Generate JWT (access + refresh tokens)
  // 4. Store tokens in session / cookies
};
export const signout = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // TODO:
  // 1. Delete refresh token from DB / Redis
  // 2. Clear cookies
  // 3. Return success response
};
