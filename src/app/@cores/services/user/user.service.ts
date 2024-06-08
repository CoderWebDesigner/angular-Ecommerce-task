import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import * as Users from '../../../../assets/json-db/users.json';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUsers():Observable<any[]> {
    return of(Users).pipe(map((res:any)=>res.default))
  }
}
