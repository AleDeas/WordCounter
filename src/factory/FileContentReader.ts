import fs from 'fs';
import { ContentReader } from './ContentReaderFactory';

// Implementazione di ContentReader per file locali.

export class FileContentReader implements ContentReader {
  async read(path: string): Promise<string | null> {
    try {
      return fs.readFileSync(path, 'utf-8');
    } catch (error: any) {
      if (error instanceof Error) {
        console.error(`Errore nel leggere il file dal percorso locale: ${error.message}`);
      } else {
        console.error('Errore sconosciuto nel leggere il file dal percorso locale');
      }
      return null;
    }
  }
}