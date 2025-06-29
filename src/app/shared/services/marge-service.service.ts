import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct, Irating } from '../consts/product';

@Injectable({
  providedIn: 'root',
})
export class MargeServiceService {
  PRODUCT_URL: string = `${environment.productsUrl}`;
  REVIEW_URL: string = `${environment.reviewUrl}`;
  constructor(private _http: HttpClient) {}

  getAllProducts(): Observable<Iproduct> {
    return this._http.get<Iproduct>(`${this.PRODUCT_URL}`);
  }

  getReviewsById(prodId: Irating): Observable<Irating> {
    return this._http.get<Irating>(`${this.REVIEW_URL}/${prodId}`);
  }
}
