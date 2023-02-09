"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
async function getGames() {
    return await database_1.default.game.findMany({
        include: {
            Console: true
        }
    });
}
async function getSpecificGame(id) {
    return await database_1.default.game.findFirst({
        where: { id }
    });
}
async function getSpecificGameByName(title) {
    return await database_1.default.game.findFirst({
        where: {
            title
        }
    });
}
async function insertGame(game) {
    return await database_1.default.game.create({
        data: game
    });
}
const gamesRepository = {
    getGames,
    getSpecificGame,
    getSpecificGameByName,
    insertGame
};
exports.default = gamesRepository;
