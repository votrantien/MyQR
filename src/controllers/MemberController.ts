import { Request, Response } from "express";
import { IMember, MemberModel } from "../models/MemberModel";
import mongoose from "mongoose";

interface resMember extends IMember {
  _id?: mongoose.Types.ObjectId;
}

export const getInfoMember = async (req: Request, res: Response) => {
  try {
    const memberUUID: string = req.params.uuid?.toString() || "";
    const data: { title: string; member: resMember } = {
      title: "Member Page",
      member: {},
    };
    const member = await MemberModel.findOne({
      _id: new mongoose.Types.ObjectId(memberUUID),
    });
    if (member) {
      data.member = member;
    }
    res.render("member", data);
  } catch (error: any) {
    res.status(500).render("error", { title: "error", error });
  }
};
