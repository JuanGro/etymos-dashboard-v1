export class Test {
  public id: number;
  public phrase: string;
  public word_id: number;
  public etymos_version_test: string;
  public correct_option: string;
  public incorrect_option1: string;
  public incorrect_option2: string;

  constructor(json?) {
    if (json) {
      if (json.id) {
        this.id = json.id;
      }
      this.phrase = json.phrase;
      this.word_id = json.word_id;
      this.etymos_version_test = json.etymos_version_test;
      this.correct_option = json.correct_option;
      this.incorrect_option1 = json.incorrect_option1;
      this.incorrect_option2 = json.incorrect_option2;
    }
  }
}