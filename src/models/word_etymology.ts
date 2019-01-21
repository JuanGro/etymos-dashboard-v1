import { Word } from './word';
import { Etymology } from './etymology';

export class WordEtymology {
  public id: number;
  public word_id: number;
  public etymology_id: number;
  public etymology_order: number;
  public word: Word;
  public etymology: Etymology;
  public word_word: string;
  public etymology_pattern: string;

  constructor(json?) {
    if (json) {
      this.id = json.id;
      this.word_id = json.word_id;
      this.etymology_id = json.etymology_id;
      this.etymology_order = json.etymology_order;
      if (json.word) {
        this.word = json.word;
        this.word_word = json.word.word_word;
      }
      if (json.etymology) {
        this.etymology = json.etymology;
        this.etymology_pattern = json.etymology.pattern;
      }
    }
  }
}
