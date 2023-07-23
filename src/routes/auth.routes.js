import { Router } from "express";
import passport from "passport";
import { passportError, authorization } from "../utils/messageError.js";
import { validateRegistration } from "../middlewares/validations.js";
import {
  getUsers,
  loginValidation,
  logoutUser,
} from "../controllers/auth.controller.js";

const routerAuth = Router();

routerAuth.get("/signup", (req, res) => {
  res.render("auth/signup");
});

routerAuth.post(
  "/session/register",
  validateRegistration,
  passport.authenticate("register"),
  async (req, res) => {
    res.send({ status: "success", message: "User successfully created" });
  }
);

routerAuth.get("/login", (req, res) => {
  if (req.session.login) {
    res.redirect("../api/products");
  } else {
    res.render("auth/login");
  }
});

routerAuth.post("/session/login", loginValidation);

//routerAuth.post("/session/login/callback/credentials", loginValidation);

routerAuth.get("/session/logout", logoutUser);

routerAuth.get("/users", passportError("jwt"), authorization(), getUsers);

routerAuth.get(
  "/testJWT",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const username = req.user.first_name;
    res.send({ status: "success", message: `Welcome ${username}` });
  }
);

routerAuth.get(
  "/session/current",
  passportError("jwt"),
  authorization(),
  async (req, res) => {
    console.log(req)
    const username = req.user.first_name;
    res.send({ message: `Welcome ${username}` });
  }
);

export default routerAuth;
