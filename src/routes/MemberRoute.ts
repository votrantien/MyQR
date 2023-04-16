import { Router } from "express";
import { getInfoMember } from "../controllers";

const router = Router();
router.get("/member/:uuid", getInfoMember);
router.get("/member", getInfoMember);

export { router as memberRouter };
