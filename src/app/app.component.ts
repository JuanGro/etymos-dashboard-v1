import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Word } from 'src/models/word';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public word: Word;

  constructor() {}

  ngOnInit() {}

  saveWord(word: Word) {
    this.word = word;
  }
}
