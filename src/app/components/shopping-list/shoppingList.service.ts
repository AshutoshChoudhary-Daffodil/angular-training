import { EventEmitter } from "@angular/core";
import { ingredients } from "../shared/ingredient.model";



export class shoppingListService{
    ingredientsChanged = new EventEmitter<ingredients[]>();
    ingredients:ingredients[] = [new ingredients('Apples',5),new ingredients('tomatos',3),new ingredients('mango',2)];

    getIngredient(){
        return this.ingredients;
    }

    addIngredient(ingredient:ingredients){
        this.ingredients.push(ingredient)
    }
}