"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGame = exports.getSpecificGame = exports.getGames = void 0;
const http_status_1 = __importDefault(require("http-status"));
const games_service_1 = __importDefault(require("../services/games-service"));
async function getGames(req, res) {
    const games = await games_service_1.default.getGames();
    res.send(games);
}
exports.getGames = getGames;
async function getSpecificGame(req, res) {
    const id = parseInt(req.params.id);
    try {
        const game = await games_service_1.default.getSpecificGame(id);
        res.send(game);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(http_status_1.default.NOT_FOUND);
    }
}
exports.getSpecificGame = getSpecificGame;
async function createGame(req, res) {
    const game = req.body;
    try {
        await games_service_1.default.createGame(game);
        res.sendStatus(http_status_1.default.CREATED);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(http_status_1.default.CONFLICT);
    }
}
exports.createGame = createGame;
