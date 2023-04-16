"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
exports.registerRouter = router;
router.get("/register", controllers_1.registerController);
router.post("/register", controllers_1.createMember);
