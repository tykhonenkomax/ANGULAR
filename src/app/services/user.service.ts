import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUsers} from "../interfaces/IUsers";
import {urls} from "../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:IUsers[];

  constructor(private  httpClient:HttpClient) { }

  getUsers():Observable<IUsers[]>{

    return this.httpClient.get<IUsers[]>(urls.users)

  }
}
