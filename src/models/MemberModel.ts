import { Schema, model } from "mongoose";

export interface IMember {
  fullName?: string;
  gender?: string;
  dob?: Date;
  email?: string;
  phone?: string;
  major?: string;
  school?: string;
  studentCode?: string;
  numberOfPeople?: number;
}

const memberSchema = new Schema<IMember>({
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

export const MemberModel = model<IMember>("Member", memberSchema);
