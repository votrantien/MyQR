"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
exports.memberRouter = router;
router.get("/member/:uuid", controllers_1.getInfoMember);
router.get("/member", controllers_1.getInfoMember);
