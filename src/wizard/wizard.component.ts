import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Word } from 'src/models/word';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html'
})
export class WizardComponent implements OnInit {
  public word: Word;

  constructor() {}

  ngOnInit() {}

  saveWord(word: Word) {
    this.word = word;
  }
}
