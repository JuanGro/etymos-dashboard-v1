export class WordEtymology {
  public word_id: number;
  public etymology_id: number;
  public etymology_order: number;

  constructor(json?: WordEtymology) {
    if (json) {
      this.word_id = json.word_id;
      this.etymology_id = json.etymology_id;
      this.etymology_order = json.etymology_order;
    }
  }
}