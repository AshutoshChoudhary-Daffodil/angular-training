import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ingredients } from '../../shared/ingredient.model';
import { shoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private slService: shoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new ingredients(ingName, ingAmount);
    console.log(ingName,ingAmount)
    this.slService.addIngredient(newIngredient);
  }

}
