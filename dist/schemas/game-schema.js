"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.gameSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    consoleId: joi_1.default.number().required()
});
