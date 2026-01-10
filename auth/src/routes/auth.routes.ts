import express from "express";
import { body } from "express-validator";
import { validateRequest } from "../middlewares/validate-request";
import { signin, signout, signup } from "../controllers/auth.controller";

const router = express.Router();

// signup
router.post(
  "/api/users/signup",
  [
    body("email").isEmail().normalizeEmail().withMessage("Email must be valid"),

    body("password")
      .trim()
      .isLength({ min: 8, max: 20 })
      .withMessage("Password must be between 8 and 20 characters")
      .matches(/[a-z]/)
      .withMessage("Password must contain a lowercase letter")
      .matches(/[A-Z]/)
      .withMessage("Password must contain an uppercase letter")
      .matches(/[0-9]/)
      .withMessage("Password must contain a number"),
  ],
  validateRequest,
  signup
);

// signin
router.post("/api/users/signin", signin);

//signout
router.post("/api/users/signout", signout);

export { router as authRouter };
