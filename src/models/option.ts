export class Option {
  public word_option: string;
  public correct: boolean;
  public test_id: number;

  constructor(json?) {
    if (json) {
      this.word_option = json.word_option;
      this.correct = json.correct;
      this.test_id = json.test_id;
    }
  }
}
