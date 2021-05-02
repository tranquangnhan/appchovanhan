import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {                           //<<<---using ()=> syntax
      
    }, 5000);
  }

}
