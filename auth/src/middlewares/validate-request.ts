import { Request, Response } from "express";

import { validationResult } from "express-validator";

// Validation Error Middleware
export const validateRequest = (req: Request, res: Response, next: any) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  next();
};
