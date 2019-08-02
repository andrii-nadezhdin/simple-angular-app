import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'test server';

  constructor() { 
    setTimeout(() => this.allowNewServer = true, 2 * 1000)
  }

  ngOnInit() {
  }

  onButtonClick = () => {
    alert('hehehehe');
  }

}
