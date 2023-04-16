"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberModel = void 0;
const mongoose_1 = require("mongoose");
const memberSchema = new mongoose_1.Schema({
    fullName: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    major: { type: String, required: true },
    school: { type: String, required: true },
    studentCode: { type: String, required: true, unique: true },
    numberOfPeople: { type: Number, required: true },
});
exports.MemberModel = (0, mongoose_1.model)("Member", memberSchema);
