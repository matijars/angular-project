import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { recipes } from 'src/app/helpers/mocks';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  api_id = 'd4011997';
  api_key = '3ace1096e31d8ac7f04a8cadd5a187c0';
  url = 'https://api.edamam.com/api/recipes/v2?type=public';

  constructor(private http: HttpClient) {}

  getRecipe(recipeSearchTerm: string): Observable<any> {
    return this.http.get<any>(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeSearchTerm}&app_id=${this.api_id}&app_key=${this.api_key}`
    );
  }
}
