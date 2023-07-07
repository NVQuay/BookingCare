import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/about", homeController.getAboutPage);

  router.get("/quaynguyen", (req, res) => {
    return res.send("hello nguyen van quay");
  });

  return app.use("/", router);
};
module.exports = initWebRoutes;
