import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeService: RecipesService) {}
  recipes: any;
  loader!: boolean;

  ngOnInit(): void {}

  recipeSearch(recipe: string) {
    this.loader = true;
    this.recipeService.getRecipe(recipe).subscribe((res) => {
      this.recipes = res.hits;
      this.loader = false;
    });
  }
}
