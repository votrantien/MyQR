import { Router } from "express";
import { homeController } from "../controllers";

const router = Router();
router.get("/", homeController);

export { router as homeRouter };
