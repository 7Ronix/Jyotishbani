import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Pusher from 'pusher-js';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {


  userName = 'UserName';
  message = '';
  messages = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    Pusher.logToConsole = true;

    const pusher = new Pusher('cb6fcee1ae8eb4578fd8', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', data => {
      // this.message.push(data);
    });
  }

  submit(): void {
    // this.http.post(url: 'http://localhost:8000/api/message', body{
    //   userName:this.userName,
    //   message:this.message
    // }).subscribe(next:()=>this.message = '');

  }

}
