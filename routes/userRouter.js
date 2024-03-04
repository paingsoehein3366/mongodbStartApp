import express from "express";
const router = express.Router();
import { loginRouter, getAllData, createAccount } from "./../controllers/userController.js";

router
      .route('/login')
      .post(loginRouter)

router
      .route('/createAccount')
      .post(createAccount)

router
      .route("/")
      .get(getAllData)

export default router;