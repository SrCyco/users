import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

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
}
