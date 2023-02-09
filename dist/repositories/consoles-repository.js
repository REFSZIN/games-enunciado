"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
async function getConsoles() {
    return await database_1.default.console.findMany();
}
async function getSpecificConsole(id) {
    return await database_1.default.console.findFirst({
        where: { id }
    });
}
async function getSpecificConsoleByName(name) {
    return await database_1.default.console.findFirst({
        where: {
            name
        }
    });
}
async function insertConsole(console) {
    return await database_1.default.console.create({
        data: console
    });
}
const consolesRepository = {
    getConsoles,
    getSpecificConsole,
    getSpecificConsoleByName,
    insertConsole
};
exports.default = consolesRepository;
