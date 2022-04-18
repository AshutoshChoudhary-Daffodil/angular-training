import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css'],
})
export class HeaderComponent{
  @Output() featureSelected = new EventEmitter<string>();
onRecipeClick(feature:string){
this.featureSelected.emit(feature);
}

onShoppingClick(feature:string){
    this.featureSelected.emit(feature);
    }
}