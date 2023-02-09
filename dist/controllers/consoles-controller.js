"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConsole = exports.getSpecificConsole = exports.getConsoles = void 0;
const http_status_1 = __importDefault(require("http-status"));
const consoles_service_1 = __importDefault(require("../services/consoles-service"));
async function getConsoles(req, res) {
    const consoles = await consoles_service_1.default.getConsoles();
    res.send(consoles);
}
exports.getConsoles = getConsoles;
async function getSpecificConsole(req, res) {
    const id = parseInt(req.params.id);
    try {
        const console = await consoles_service_1.default.getSpecificConsole(id);
        res.send(console);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(http_status_1.default.NOT_FOUND);
    }
}
exports.getSpecificConsole = getSpecificConsole;
async function createConsole(req, res) {
    const consoleToCreate = req.body;
    try {
        await consoles_service_1.default.createConsole(consoleToCreate);
        res.sendStatus(http_status_1.default.CREATED);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(http_status_1.default.CONFLICT);
    }
}
exports.createConsole = createConsole;
