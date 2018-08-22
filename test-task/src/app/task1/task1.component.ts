import { GettingService } from './../getting.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  uInfo: any[];

  constructor(private service: GettingService) { }

  ngOnInit() {
    this.service.getInfo()
    .subscribe(response => {
      this.uInfo = response.json();
      console.log(this.uInfo);      
    });
  }

  remove_user(response){
    let index = this.uInfo.indexOf(response);
		this.uInfo.splice(index, 1);

    /* Note: if you need api services than use these */
		// this.service.removeInfo(response)
		// 	.subscribe(response => {})
  }

}
