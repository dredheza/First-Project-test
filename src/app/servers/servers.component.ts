import { Component, OnInit } from '@angular/core';

@Component({
  
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  canAddServer = false;

  constructor() { 
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.canAddServer = true;
    }, 2000);
  }

  

}
