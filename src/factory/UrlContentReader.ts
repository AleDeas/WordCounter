import axios from 'axios';
import { ContentReader } from './ContentReaderFactory';


//Implementazione di ContentReader per URL remoti.

export class UrlContentReader implements ContentReader {
  async read(path: string): Promise<string | null> {
    try {
      const response = await axios.get(path);
      return response.data;
    } catch (error: any) {
      if (error instanceof Error) {
        console.error(`Errore nel leggere il file dall'URL: ${error.message}`);
      } else {
        console.error('Errore sconosciuto nel leggere il file dall\'URL');
      }
      return null;
    }
  }
}