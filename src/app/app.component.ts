import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeatur = 'recipe';
  onNavigate(feature:string){
    this.loadedFeatur=feature
  }
}
