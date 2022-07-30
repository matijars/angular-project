import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeListComponent } from './components/recipe-section/recipe-list/recipe-list.component';
import { UserListComponent } from './components/user-section/user-list/user-list.component';
import { WeatherListComponent } from './components/weather-section/weather-list/weather-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserListComponent },
  { path: 'weather', component: WeatherListComponent },
  { path: 'recipes', component: RecipeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
