// Analizza il testo e restituisce un oggetto con le statistiche.

export function analyzeText(text: string) {
    const words = text.split(/\s+/);
    const totalWords = words.length;
    const totalLetters = text.replace(/[^a-zA-Z]/g, '').length;
    const totalSpaces = (text.match(/\s+/g) || []).length;
  
    const wordCount: { [word: string]: number } = {};
    words.forEach(word => {
      word = word.toLowerCase();
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    });
  
    const repeatedWords: { [word: string]: number } = {};
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
  