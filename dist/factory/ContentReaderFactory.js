"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentReaderFactory = void 0;
const FileContentReader_1 = require("./FileContentReader");
const UrlContentReader_1 = require("./UrlContentReader");
// Factory per creare istanze di ContentReader.
class ContentReaderFactory {
    static createContentReader(path) {
        if (path.startsWith('http://') || path.startsWith('https://')) {
            return new UrlContentReader_1.UrlContentReader();
        }
        else {
            return new FileContentReader_1.FileContentReader();
        }
    }
}
exports.ContentReaderFactory = ContentReaderFactory;
