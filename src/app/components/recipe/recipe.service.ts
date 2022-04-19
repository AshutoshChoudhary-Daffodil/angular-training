import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[]=[new Recipe('testing title','testing description','testing imagePath'),
  new Recipe('testing title 2','testing description 2' ,'testing imagePath')]

  getRecipe(){
      return this.recipes.slice();
  }
}
