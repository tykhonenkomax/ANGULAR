import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ipost} from "../interfaces/Ipost";
import {urls} from "../urls/urls";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Ipost[];

  constructor(private httpClient:HttpClient) {}
  getPost():Observable<Ipost[]>{
    return this.httpClient.get<Ipost[]>(urls.posts)
  }

  getPostById(id:string):Observable<Ipost>{
    return this.httpClient.get<Ipost>(urls.posts+'/'+id)
  }
}
