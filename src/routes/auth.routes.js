import { Router } from "express";
import passport from "passport";
import { passportError, authorization } from "../utils/messageError.js";
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
  "/signup",
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

routerAuth.get("/session/logout", logoutUser);
//  (req, res) => {

// console.log(req.session);
// req.session.destroy((err) => {
//   if (err) {
//     console.log('Error destroying session:', err);
//     return res.status(500).send({ status: 'error', message: 'Internal Server Error' });
//   }

//   res.clearCookie('connect.sid');
//   res.send({ status: 'success', message: 'Session destroyed' });
// });

// if (req.session.login) {
//   req.session.destroy(() => {
//     console.log("Session destroyed");
//     res.send({ status: "success", message: "Session destroyed" });
//     //res.redirect("../");
//   });
//   return;
// }
// res.send({ status: "error", message: "No session" });
//res.redirect("../");
// });

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
    const username = req.user.first_name;
    res.send({ message: `Welcome ${username}` });
  }
);

export default routerAuth;
