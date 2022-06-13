import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLinkActive} from "@angular/router";
import {CommentService} from "../../services/comment.service";
import {ICommentDetailsObj} from "../../interfaces/ICommentDetailsObj";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private commentService:CommentService) { }

  comment:ICommentDetailsObj;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      return this.commentService.getCommentsById(id).subscribe(value => this.comment=value)
    })
  }

}
