"use strict";
// Analizza il testo e restituisce un oggetto con le statistiche.
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeText = analyzeText;
function analyzeText(text) {
    const words = text.split(/\s+/);
    const totalWords = words.length;
    const totalLetters = text.replace(/[^a-zA-Z]/g, '').length;
    const totalSpaces = (text.match(/\s+/g) || []).length;
    const wordCount = {};
    words.forEach(word => {
        word = word.toLowerCase();
        if (wordCount[word]) {
            wordCount[word]++;
        }
        else {
            wordCount[word] = 1;
        }
    });
    const repeatedWords = {};
    for (const word in wordCount) {
        if (wordCount[word] > 10) {
            repeatedWords[word] = wordCount[word];
        }
    }
    return {
        totalWords,
        totalLetters,
        totalSpaces,
        repeatedWords
    };
}
