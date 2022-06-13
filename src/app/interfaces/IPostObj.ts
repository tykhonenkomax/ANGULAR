import {Ipost} from "./Ipost";

export interface IPostObj extends Ipost{
  id:number|string;
  body:string;
  title:string;
}
