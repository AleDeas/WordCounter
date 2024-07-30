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
const readline_sync_1 = __importDefault(require("readline-sync"));
const ContentReaderFactory_1 = require("./factory/ContentReaderFactory");
const analyzeText_1 = require("./analyzeText");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const path = readline_sync_1.default.question('Inserisci il percorso del file (locale o URL): ');
        const contentReader = ContentReaderFactory_1.ContentReaderFactory.createContentReader(path);
        const content = yield contentReader.read(path);
        if (content) {
            const analysis = (0, analyzeText_1.analyzeText)(content);
            console.log(`Numero totale di parole: ${analysis.totalWords}`);
            console.log(`Numero totale di lettere: ${analysis.totalLetters}`);
            console.log(`Numero totale di spazi: ${analysis.totalSpaces}`);
            console.log('Parole che si ripetono più di 10 volte:');
            for (const word in analysis.repeatedWords) {
                console.log(`${word}: ${analysis.repeatedWords[word]}`);
            }
        }
    });
}
main();
