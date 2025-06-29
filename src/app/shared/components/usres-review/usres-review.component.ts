import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { from, map, mergeMap, toArray } from 'rxjs';

@Component({
  selector: 'app-usres-review',
  templateUrl: './usres-review.component.html',
  styleUrls: ['./usres-review.component.scss'],
})
export class UsresReviewComponent implements OnInit {
  usersArray: any[] = [];
  constructor(private _usersService: UsersServiceService) {}

  ngOnInit(): void {
    this.fetchAllUsers();
  }

  fetchAllUsers() {
    this._usersService
      .getAllUsers()
      .pipe(
        mergeMap((users: any) => from(users)),
        mergeMap((user: any) => {
          return this._usersService.getUserComment(user.id).pipe(
            map((comment: any, i) => {
              return { ...user, comment: comment };
            })
          );
        }),
        toArray()
      )
      .subscribe((res) => {
        this.usersArray = res;
      });
  }
}
