import { FileContentReader } from './FileContentReader';
import { UrlContentReader } from './UrlContentReader';

export interface ContentReader {
    read(path: string): Promise<string | null>;
  }

// Factory per creare istanze di ContentReader.
export class ContentReaderFactory {
  static createContentReader(path: string): ContentReader {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return new UrlContentReader();
    } else {
      return new FileContentReader();
    }
  }
}
	