export class WordEtymology {
  public id: number;
  public word_id: number;
  public etymology_id: number;
  public etymology_order: number;

  constructor(json?) {
    if (json) {
      this.id = json.id;
      this.word_id = json.word_id;
      this.etymology_id = json.etymology_id;
      this.etymology_order = json.etymology_order;
    }
  }
}