import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../services/post.service";
import {Ipost} from "../../interfaces/Ipost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Ipost[]

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPost().subscribe(value => this.posts=value)
  }

}
