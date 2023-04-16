import { Request, Response } from "express";

export const homeController = (req: Request, res: Response) => {
  // Truyền dữ liệu vào template
  const data = { title: "Home Page", message: "Welcome to my website!" };

  // Render template và trả về nội dung
  res.render("index", data);
};
