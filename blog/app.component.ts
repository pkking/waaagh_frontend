import { Component } from '@angular/core';
import {blogService}  from './blog.service';

@Component({
  selector: 'sidebar',
  templateUrl: 'blog/sidebar.html',
  directives: [blogService],
  providers:[],
})
export class sideBar{
    constructor(private blogService: blogService) { }
};