"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consoles_repository_1 = __importDefault(require("../repositories/consoles-repository"));
async function getConsoles() {
    const consoles = await consoles_repository_1.default.getConsoles();
    return consoles;
}
async function getSpecificConsole(id) {
    const console = await consoles_repository_1.default.getSpecificConsole(id);
    if (!console) {
        throw { message: "Console not found." };
    }
    return console;
}
async function createConsole(console) {
    const consoleAlreadyRegistered = await consoles_repository_1.default.getSpecificConsoleByName(console.name);
    if (consoleAlreadyRegistered) {
        throw { message: "This console already exists!" };
    }
    await consoles_repository_1.default.insertConsole(console);
}
const consolesService = {
    getConsoles,
    getSpecificConsole,
    createConsole
};
exports.default = consolesService;
