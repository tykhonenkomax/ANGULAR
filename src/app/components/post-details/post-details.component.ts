import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {PostService} from "../../services/post.service";
import {IPostObj} from "../../interfaces/IPostObj";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {


  postDetailsObj:IPostObj;

  constructor(private activatedRoute:ActivatedRoute,
              private postService:PostService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.postService.getPostById(id).subscribe(value => this.postDetailsObj=value)
    })
  }

}
