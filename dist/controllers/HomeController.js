"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeController = void 0;
const homeController = (req, res) => {
    // Truyền dữ liệu vào template
    const data = { title: "Home Page", message: "Welcome to my website!" };
    // Render template và trả về nội dung
    res.render("index", data);
};
exports.homeController = homeController;
