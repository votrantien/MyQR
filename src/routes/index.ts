import { Router } from "express";
import { homeRouter } from "./HomeRoute";
import { registerRouter } from "./RegisterRoute";
import { memberRouter } from "./MemberRoute";

const router = Router();

router.use(registerRouter);
router.use(homeRouter);
router.use(memberRouter);

export { router as routes };
