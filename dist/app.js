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
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = require("mongoose");
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const path_1 = __importDefault(require("path"));
//load env
dotenv_1.default.config();
const port = process.env.PORT || 3121;
const mongoUri = process.env.MONGODB_URI || "";
// init express app
const app = (0, express_1.default)();
// apply view engine
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "views"));
//middlewares
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("tiny"));
app.use(express_1.default.json());
//connect database
run().catch((err) => console.log(err));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, mongoose_1.connect)(mongoUri).then((r) => {
            if (r.connection.readyState) {
                console.log(`Database connected`);
            }
        });
    });
}
app.use("/", routes_1.routes);
//run server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
