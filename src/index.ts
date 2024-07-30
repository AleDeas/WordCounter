import readlineSync from 'readline-sync';
import { ContentReaderFactory } from './factory/ContentReaderFactory';
import { analyzeText } from './analyzeText';

async function main() {
  const path = readlineSync.question('Inserisci il percorso del file (locale o URL): ');
  const contentReader = ContentReaderFactory.createContentReader(path);
  const content = await contentReader.read(path);

  if (content) {
    const analysis = analyzeText(content);

    console.log(`Numero totale di parole: ${analysis.totalWords}`);
    console.log(`Numero totale di lettere: ${analysis.totalLetters}`);
    console.log(`Numero totale di spazi: ${analysis.totalSpaces}`);
    console.log('Parole che si ripetono più di 10 volte:');
    for (const word in analysis.repeatedWords) {
      console.log(`${word}: ${analysis.repeatedWords[word]}`);
    }
  }
}

main();