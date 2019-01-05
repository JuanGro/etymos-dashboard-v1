export class Test {
  public phrase: string;
  public word_id: number;
  public etymos_version_test: string;
  public option1: string;
  public option2: string;
  public option3: string;

  constructor(json?: Test) {
    if (json) {
      this.phrase = json.phrase;
      this.word_id = json.word_id;
      this.etymos_version_test = json.etymos_version_test;
      this.option1 = json.option1;
      this.option2 = json.option2;
      this.option3 = json.option3;
    }
  }
}