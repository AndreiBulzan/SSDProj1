import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Output() myEvent = new EventEmitter<string>();
  @Output() myEventForwarded = new EventEmitter<string>();
  @Output() myEventGetStartTiles = new EventEmitter<string>();
  @Output() myEventUpload = new EventEmitter<string>();
  myAux = '';
  callParent() {
    this.myEvent.emit('eventDesc');
  }
  callParent2()
  {
    this.myEventForwarded.emit(this.myAux);
  }
  callParent3()
  {
    this.myEventGetStartTiles.emit('Getting tiles');
  }
  callParent4()
  {
    this.myEventUpload.emit('Upload clicked');
  }
@Input() usid: string = "";
pwd: string = "";
log: string ="Login";
loggeduser : string= "";
loggedInUser : string = '';
isAuthenticated = 0;
z1=-15;
z2=1;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.callParent3();
  }
onLogin()
{
  if(this.isAuthenticated === 1) {
    this.loggedInUser = '';
    this.z2 = 1;
    this.log = 'Login';
    this.isAuthenticated = 0;
  }
  else {
//this.usid="Logged";
//this.pwd=" in";
    console.log(this.usid);
    console.log(this.pwd)
    if (this.usid === 'Logged')
      if (this.pwd === 'in')
        this.showUser();
    if (this.usid === 'user1')
      if (this.pwd === 'pwd1') {
        this.loggedInUser = 'Logged in as ' + this.usid;
        this.z1 = -15;
        this.z2 = 0;
        this.log = 'Logout';
        this.isAuthenticated = 1;
        this.getStyle();

      }
  }
  const url = `http://localhost:7070/api/user/login/${this.usid}`;
  const post = new HttpParams().set('password' , this.pwd);
  this.http.get(url, {params: post}).subscribe(
    res => {
      console.log(res);
    }
  );
}



showUser()
{
  if (this.log === 'Logout')
    this.log = 'Login';
  else if( this.log === 'Login')
    this.log = 'Logout';
  console.log("asddd");
  this.loggeduser = this.usid;
  //this.log = "Logout";
  console.log(this.loggeduser);
  this.callParent();

}
  getStyle() {
      return this.z1;
  }
  sendForward(event)
  {
    console.log('Hello');
    console.log(event);
    this,this.myAux=event;
    this.callParent2();
  }

}
