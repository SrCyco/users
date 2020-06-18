import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API = environment.API_URL;

  constructor(
    private http: HttpClient
  ) {

   }

   public getUsers() {
     return this.http.get(this.API)
   };

   public getUser(userId: number) {
     return this.http.get(`${this.API}/${userId}`);
   }

   public deleteUser(userId: number) {
    return this.http.delete(`${this.API}/${userId}`);
   }

   public addUser(body) {
     return this.http.post(this.API, body);
   }
}
