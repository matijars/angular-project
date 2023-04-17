import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss'],
})
export class RecipeSearchComponent implements OnInit {
  @Output() recipeSearchEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  updateName(recipeSearchTerm: string) {
    this.recipeSearchEvent.emit(recipeSearchTerm);
  }
}
