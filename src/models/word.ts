export class Word {
  public word_word: string;
  public meaning_word: string;
  public image_word: string;
  public etymos_version_word: string;

    constructor(json?: Word) {
      if (json) {
        this.word_word = json.word_word;
        this.meaning_word = json.meaning_word;
        this.image_word = json.image_word;
        this.etymos_version_word = json.etymos_version_word;
      }
    }
  }