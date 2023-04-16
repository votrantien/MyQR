import { Router } from "express";
import { createMember, registerController } from "../controllers";

const router = Router();
router.get("/register", registerController);
router.post("/register", createMember);

export { router as registerRouter };
