import {Component, Input, OnInit} from '@angular/core';
import {Ipost} from "../../interfaces/Ipost";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post:Ipost;

  constructor() { }

  ngOnInit(): void {
  }

}
