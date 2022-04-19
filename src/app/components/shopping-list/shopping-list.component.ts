import { Component, OnInit } from '@angular/core';
import { ingredients } from '../shared/ingredient.model';
import { shoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: ingredients[];

	  constructor(private slService: shoppingListService) { }

	  ngOnInit() {
	    this.ingredients = this.slService.getIngredient();
	    this.slService.ingredientsChanged
	      .subscribe(
		(ingredients: ingredients[]) => {
		  this.ingredients = ingredients;
		}
	      );
	  }

}
