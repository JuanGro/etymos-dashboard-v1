export class Test {
  public phrase: string;
  public word_id: number;
  public etymos_version_test: string;

  constructor(json?: Test) {
    if (json) {
      this.phrase = json.phrase;
      this.word_id = json.word_id;
      this.etymos_version_test = json.etymos_version_test;
    }
  }
}