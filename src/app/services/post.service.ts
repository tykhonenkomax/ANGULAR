import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosts} from "../interfaces/IPosts";
import {urls} from "../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:IPosts[];

  constructor(private httpClient:HttpClient) { }
  getPosts():Observable<IPosts[]>{
    return this.httpClient.get<IPosts[]>(urls.posts)
  }
}
