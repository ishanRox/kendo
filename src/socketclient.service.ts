import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as socketCluster from 'socketcluster-client';


@Injectable({
  providedIn: 'root'
})
export class SocketclientService implements OnInit {

  socket = socketCluster.create({
    hostname: "localhost",
    port: 8000,
  });
  
  
  constructor(private toastr: ToastrService) {
    console.log('started sc client');
    //subscribe to the server channel and listen for messages(notifications)
    (async () => {
      let channel = this.socket.subscribe("channelName");
      //send data to the  server
      this.socket.transmit("channelName", "Hi Im a new client ");

      for await (let data of channel) {
        // ... Handle channel data.
        console.log(data);
        console.log('data received');
        this.toastr.success('Hello world!', 'Toastr fun!');
      }
    })();
  }

  ngOnInit(): void {


  }
}
