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

  constructor(srv: AmaJohnService){
    this.items = srv.getItems();
  }
}
