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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMember = exports.registerController = void 0;
const MemberModel_1 = require("../models/MemberModel");
const qrcode_1 = __importDefault(require("qrcode"));
const registerController = (req, res) => {
    const data = { title: "Register Page", newMember: {} };
    res.render("register", data);
};
exports.registerController = registerController;
const createMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(req);
        const data = {
            title: "Register Page",
            newMember: {},
            qr_code: "",
        };
        const host = req.get("host");
        const checkMember = yield MemberModel_1.MemberModel.findOne({
            $or: [
                { phone: req.body.phone },
                { email: req.body.email },
                { studentCode: req.body.studentCode },
            ],
        });
        if (!checkMember) {
            const member = new MemberModel_1.MemberModel(req.body);
            const newMember = yield member.save();
            if (newMember._id) {
                data.newMember = newMember;
            }
        }
        else {
            data.newMember = checkMember;
        }
        const idMember = data.newMember._id ? data.newMember._id.toString() : "";
        const qrString = `http://${host}/member/${idMember}`;
        qrcode_1.default.toDataURL(qrString, (err, src) => {
            data.qr_code = src;
            res.render("register", data);
        });
    }
    catch (error) {
        res.status(500).render("error", { title: "error", error });
    }
});
exports.createMember = createMember;
