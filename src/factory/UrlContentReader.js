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
exports.UrlContentReader = void 0;
const axios_1 = __importDefault(require("axios"));
//Implementazione di ContentReader per URL remoti.
class UrlContentReader {
    read(path) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(path);
                return response.data;
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error(`Errore nel leggere il file dall'URL: ${error.message}`);
                }
                else {
                    console.error('Errore sconosciuto nel leggere il file dall\'URL');
                }
                return null;
            }
        });
    }
}
exports.UrlContentReader = UrlContentReader;
