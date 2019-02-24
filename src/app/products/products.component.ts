import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data:number = 100;
  constructor() {
    console.log(`new - data is ${this.data}`);
    console.log("construstor");
   }

  ngOnInit() {
    this.data++;
    console.log(`ngOnInit - data is ${this.data}`);
  }
  ngOnChanges(){
    this.data++;
    console.log(`ngOnChanges - data is ${this.data}`);
  }
  ngDoCheck(){
    this.data++;
    console.log(`ngDoCheck - data is ${this.data}`);
  }
  ngAfterContentInit(){
    this.data++;
    console.log(`ngAfterContentInit - data is ${this.data}`);
  }
  ngAfterContentChecked(){
    this.data++;
    console.log(`ngAfterContentChecked - data is ${this.data}`);
  }
  ngAfterViewInit(){
    this.data++;
    console.log(`ngAfterViewInit - data is ${this.data}`);
  }
  ngAfterViewChecked(){
    this.data++;
    console.log(`ngAfterViewChecked - data is ${this.data}`);
  }
  ngOnDestory(){
    this.data++;
    console.log(`ngOnDestory - data is ${this.data}`);
  }
}
