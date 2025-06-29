import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../consts/product';
import { MargeServiceService } from '../../services/marge-service.service';
import { from, map, mergeMap, toArray } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productArray: Iproduct[] = [];
  constructor(private _margeService: MargeServiceService) {}

  ngOnInit(): void {
    this.fetchAllProducts();
  }

  fetchAllProducts() {
    this._margeService
      .getAllProducts()
      .pipe(
        mergeMap((products: any) => from(products)),
        mergeMap((prod: any) => {
          return this._margeService.getReviewsById(prod.id).pipe(
            map((review: any, i) => {
              
              return { ...prod, review: review.title };
            })
          );
        }),
        toArray()
      )
      .subscribe((res) => {
        this.productArray = res;
      });
  }
}
