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
exports.getInfoMember = void 0;
const MemberModel_1 = require("../models/MemberModel");
const mongoose_1 = __importDefault(require("mongoose"));
const getInfoMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const memberUUID = ((_a = req.params.uuid) === null || _a === void 0 ? void 0 : _a.toString()) || "";
        const data = {
            title: "Member Page",
            member: {},
        };
        const member = yield MemberModel_1.MemberModel.findOne({
            _id: new mongoose_1.default.Types.ObjectId(memberUUID),
        });
        if (member) {
            data.member = member;
        }
        res.render("member", data);
    }
    catch (error) {
        res.status(500).render("error", { title: "error", error });
    }
});
exports.getInfoMember = getInfoMember;
