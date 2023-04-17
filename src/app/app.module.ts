import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserCardComponent } from './components/user-section/user-card/user-card.component';
import { UserListComponent } from './components/user-section/user-list/user-list.component';
import { WeatherListComponent } from './components/weather-section/weather-list/weather-list.component';
import { WeatherCardComponent } from './components/weather-section/weather-card/weather-card.component';

import { PrimaryBtnComponent } from './components/buttons/primary-btn/primary-btn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecipeSearchComponent } from './components/recipe-section/recipe-search/recipe-search.component';
import { RecipeListComponent } from './components/recipe-section/recipe-list/recipe-list.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './components/loader/loader.component';
import { LoadedDirective } from './helpers/imageloaded.directive';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryBtnComponent,
    UserCardComponent,
    UserListComponent,
    WeatherListComponent,
    WeatherCardComponent,
    RecipeSearchComponent,
    RecipeListComponent,
    HomeComponent,
    NavigationComponent,
    LoaderComponent,
    LoadedDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
