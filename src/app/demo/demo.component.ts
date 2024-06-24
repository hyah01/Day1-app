import { Component } from '@angular/core';
import { AmaJohnService } from '../demolist.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  title = "List of Items"
  items;
  category:number = 0;

  constructor(srv: AmaJohnService){
    // switch case provide different data
    switch(this.category){
      case 0:
        this.items = srv.getItemsTech();
        break;
      case 1:
        this.items = srv.getItemsHome();
        break;
      case 2:
        this.items = srv.getItemsSupply();
        break;
    };
  }
}
