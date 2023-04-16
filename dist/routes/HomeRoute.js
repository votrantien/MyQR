"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
exports.homeRouter = router;
router.get("/", controllers_1.homeController);
