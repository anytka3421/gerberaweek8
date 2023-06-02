import { Component, OnInit } from '@angular/core';
import { Product } from '../interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  bouquets:any[] = [];
  prodVisible = 'visible'
  prodInvisible = 'invisible'

  constructor (private http:HttpClient){}

  ngOnInit(): void {
    this.http.get<Product>('http://localhost:8600/bouquets').subscribe(response => {
      console.log("Response is ", response)
      this.bouquets = response.bouquets
      console.log (this.bouquets)
    })
  }

}
