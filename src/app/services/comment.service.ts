import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComments} from "../interfaces/IComments";
import {urls} from "../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comments:IComments[];

  constructor(private httpClient:HttpClient) {}
    getComments():Observable<IComments[]>{
    return this.httpClient.get<IComments[]>(urls.comments)
    }
    getCommentsById(id:string):Observable<IComments>{
    return this.httpClient.get<IComments>(urls.comments+'/'+id)
    }


}
