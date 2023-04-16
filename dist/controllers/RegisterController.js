"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMember = exports.registerController = void 0;
const MemberModel_1 = require("../models/MemberModel");
const registerController = (req, res) => {
    const data = { title: "Register Page", message: "Welcome to my website!" };
    res.render("register", data);
};
exports.registerController = registerController;
const createMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = { title: "Register Page" };
    const member = new MemberModel_1.MemberModel({
        fullName: "Vo Trần Tiến",
        gender: "Male",
        phone: "0355476424",
        email: "votrantienga@ymail.com",
        major: "IT",
        school: "CKC",
        studentCode: "1234567889",
        numberOfPeople: 2,
    });
    yield member.save();
    // res.render("register", data);
    res.json({ member });
});
exports.createMember = createMember;
