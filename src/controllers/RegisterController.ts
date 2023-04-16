import { Request, Response } from "express";
import { IMember, MemberModel } from "../models/MemberModel";
import qrcode from "qrcode";
import mongoose, { Schema } from "mongoose";

interface resMember extends IMember {
  _id?: mongoose.Types.ObjectId;
}

export const registerController = (req: Request, res: Response) => {
  const data = { title: "Register Page", newMember: {} };
  res.render("register", data);
};

export const createMember = async (req: Request, res: Response) => {
  try {
    // console.log(req);
    const data: { title: string; newMember: resMember; qr_code: string } = {
      title: "Register Page",
      newMember: {},
      qr_code: "",
    };
    const host = req.get("host");
    const checkMember = await MemberModel.findOne({
      $or: [
        { phone: req.body.phone },
        { email: req.body.email },
        { studentCode: req.body.studentCode },
      ],
    });
    if (!checkMember) {
      const member = new MemberModel(req.body);

      const newMember = await member.save();
      if (newMember._id) {
        data.newMember = newMember;
      }
    } else {
      data.newMember = checkMember;
    }
    const idMember = data.newMember._id ? data.newMember._id.toString() : "";
    const qrString = `http://${host}/member/${idMember}`;
    qrcode.toDataURL(qrString, (err, src) => {
      data.qr_code = src;
      res.render("register", data);
    });
  } catch (error: any) {
    res.status(500).render("error", { title: "error", error });
  }
};
