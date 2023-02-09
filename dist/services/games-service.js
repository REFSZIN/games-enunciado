"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consoles_repository_1 = __importDefault(require("../repositories/consoles-repository"));
const games_repository_1 = __importDefault(require("../repositories/games-repository"));
async function getGames() {
    const games = await games_repository_1.default.getGames();
    return games;
}
async function getSpecificGame(id) {
    const game = await games_repository_1.default.getSpecificGame(id);
    if (!game) {
        throw { message: "Game not found." };
    }
    return game;
}
async function createGame(game) {
    const gameAlreadyRegistered = await games_repository_1.default.getSpecificGameByName(game.title);
    if (gameAlreadyRegistered) {
        throw { message: "This game already exists!" };
    }
    const console = await consoles_repository_1.default.getSpecificConsole(game.consoleId);
    if (!console) {
        throw { message: "This console does not exists!" };
    }
    await games_repository_1.default.insertGame(game);
}
const gamesService = {
    getGames,
    getSpecificGame,
    createGame
};
exports.default = gamesService;
