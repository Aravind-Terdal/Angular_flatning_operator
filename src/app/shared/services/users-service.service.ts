import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  USERS_URL: string = `${environment.userUrl}`;
  POST_URL: string = `${environment.reviewUrl}`;
  constructor(private _http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this._http.get<any>(`${this.USERS_URL}`);
  }

  getUserComment(id: string): Observable<any> {
    return this._http.get<any>(`${this.POST_URL}?userId=${id}`);
  }
}
