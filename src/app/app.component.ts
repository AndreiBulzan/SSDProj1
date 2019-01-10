import {Component, HostListener} from '@angular/core';
import {User} from './user';
import {TopBarComponent} from './components/top-bar/top-bar.component';
/*import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
*/
import { TileClass} from './tile-class';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  //directives: [TopBarComponent]
})
export class AppComponent {
  @HostListener('window:beforeunload', [ '$event' ])
  unloadHandler(event) {
    this.myfct2();
    console.log(event);
    // ...
  }
  actualTilesUsers: User[];
  actualTiles: TileClass[];
  // title = 'SSDProj';
 /* actualTiles: TileClass[];
  exampleTile: TileClass;
  exampleTile = {id: number;
  name: 'abc';
  downloads: 123;
  path: 'sd';
  // uploader: User;
  // rating: Rating[];
  uploadTime: '10-10-2010';
}
*/
 //exampleTile = new TileClass();
  isAdmin = 1;
  someoneLogged = -1;
  isRegister = 1;
  download = 'Download';
  regId = '';
  regPwd = '';
  regMail = '';
  completeRegId = '';
  completeRegPwd = '';
  completeRegMail = '';
  downloadNews = 'Ban/Unban';
  successOpacity = 0;
  fakeStyle = -20;
  registerStyle1 = 5;
  registerStyle2 = -5;
  colsAndRows = 3;
  myPage = 1;
  myMaxPages = 1;
  myBool = false;
  someoneLoggedBanned = false;
  randVar = 'http://www.thismanslife.co.uk';
  tiles = [
    {text: 'One', rating: 8, cols: 3, rows: 3, color: 'lightblue'},
    {text: 'Two', rating: 2, cols: 3, rows: 3, color: 'lightgreen'},
    {text: 'Three', rating: 5, cols: 3, rows: 3, color: 'lightpink'},
    {text: 'Four', rating: 8, cols: 3, rows: 3, color: '#DDBDF1'},
    {text: 'One', rating: 8, cols: 3, rows: 3, color: 'lightblue'},
    {text: 'Two', rating: 10, cols: 3, rows: 3, color: 'lightgreen'},
    {text: 'Three', rating: 8,  cols: 3, rows: 3, color: 'lightpink'},
    {text: 'Four', rating: 1,  cols: 3, rows: 3, color: '#DDBDF1'},
    {text: 'One', rating: 8,  cols: 3, rows: 3, color: 'lightblue'},
    {text: 'Two', rating: 8,  cols: 3, rows: 3, color: 'lightgreen'},
    {text: 'Three', rating: 8,  cols: 3, rows: 3, color: 'lightpink'},
    {text: 'Four', rating: 8,  cols: 3, rows: 3, color: '#DDBDF1'},
  ];
  tilesUsers = [
    {text: 'User1', cols: 3, rows: 3, color: 'lightblue'},
    {text: 'User2', cols: 3, rows: 3, color: 'lightgreen'},
    {text: 'User3', cols: 3, rows: 3, color: 'lightpink'},
    {text: 'User4', cols: 3, rows: 3, color: 'lightblue'},
    {text: 'User5', cols: 3, rows: 3, color: 'lightgreen'},
    {text: 'User6', cols: 3, rows: 3, color: 'lightpink'},
    {text: 'User7', cols: 3, rows: 3, color: 'lightblue'},
    {text: 'User8', cols: 3, rows: 3, color: 'lightgreen'},
    {text: 'User9', cols: 3, rows: 3, color: 'lightpink'}
  ];
  tile1 = new TileClass();
  rating = 1;
  selectedFile: File = null;
  url = 'http://haurtorrent.herokuapp.com/';
  public myVar: string;
  private e: boolean;
  constructor(private http: HttpClient) {
  }
  createTile(tile: TileClass): Observable<TileClass> {
    return this.http.post<TileClass>(this.url, tile);
  }
  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log('Hello');
  }
  onUpload() {
    const geturl = 'http://haurtorrent.herokuapp.com/api/banned';
    this.http.get(geturl).subscribe(
      (res1: any) => {
        console.log(res1);
        console.log(event);
        if ((res1 === false) && (this.someoneLogged === 1)) {
          const fd = new FormData();
          fd.append('file', this.selectedFile, this.selectedFile.name);
          this.http.post(this.url, fd).subscribe(
            res => {
              console.log(res);
            }
          );
        }
      }
    );
  }




    /*
    if(this.someoneLogged === 1) {
      const fd = new FormData();
      fd.append('file', this.selectedFile, this.selectedFile.name);
      this.http.post(this.url, fd).subscribe(
        res => {
          console.log(res);
        }
      );
    }
  }
  */
  getStyle() {
  if (this.isAdmin === 0)
    return -5;
  return 5;
}
  getStyle2() {
    if (this.isAdmin !== 0) {
      return -5;
    }
    return 5;
  }
  changeStyleRegister1()
  {
    this.isRegister = 0;
  }
  changeStyleRegister2()
  {
    this.isRegister = 1;
  }
  getStyleRegister1() {
    if (this.isRegister == 0)
      return this.registerStyle2;
    return this.registerStyle1;
  }
  getStyleRegister2() {
    if (this.isRegister != 0)
      return this.registerStyle2;
    return this.registerStyle1;
  }
  getSpecStyle(event) {
    this.isAdmin = 0;
    if (this.isAdmin === 0)
    {
      this.fakeStyle = -20;
      this.registerStyle1 = -20;
      this.someoneLogged *= (-1);


      return -5;
  }
    return 5;
  }
  onLeaveAdmin(event)
  {
    this.isAdmin=1;
    this.registerStyle1 = 5;
    this.someoneLogged = -1;
    const geturl = 'http://haurtorrent.herokuapp.com/api/user/logout';
    this.http.get(geturl).subscribe(
      (res: any[]) => {
        console.log(res);
      }
    );
  }


  //placeholders for download and ban procedure >
  doDownload1()
  {
    if(this.download === 'Download')
  this.download='Downloaded';
    else
      this.download = 'Download';
  this.createTile(this.tile1);
  }
  doDownload2()
  {
    if(this.downloadNews === 'Ban')
      this.downloadNews = 'Unban';
    else
      this.downloadNews = 'Ban';

  }
  signUp()
{

  if ((this.regMail !== '') && (this.regId.length > 4) && (this.regId !== '') && (this.regPwd.length > 4) && (this.regPwd !== '') && (this.regMail === this.regPwd)) {
    this.setOpacityBriefly();
    this.completeRegId = this.regId;
    this.completeRegPwd = this.regPwd;
    this.completeRegMail = this.regMail;
    this.regId = '';
    this.regPwd = '';
    this.regMail = '';

    const url = this.url + `api/user/signup/${this.completeRegId}`;
    const post = new FormData();
    post.append('password', this.completeRegPwd);
    this.http.post(url, post).subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
getSuccessOpacity()
{
  return this.successOpacity;
}
  setOpacityBack()
{
  this.successOpacity = 0;
}
  setOpacityBriefly()
  {

  this.successOpacity = 1;

}
getFakeStyle()
{
  return this.fakeStyle;
}
setFakeStyle()
  {
    this.fakeStyle *= (-1);
  }
doRate( name )
{
  const geturl = 'http://haurtorrent.herokuapp.com/api/banned';
  this.http.get(geturl).subscribe(
    (res1: any) => {
      console.log(res1);
      //console.log(event);
      if((res1 === false) && (this.someoneLogged ===1))
  {
    console.log(name.rating);
    const url = this.url + `api/rate?id=${name.id}&mark=${name.rating}`;
    this.http.get(url).subscribe(
      (res: any) => {
        console.log(res);
      }
    );
  }
    }
  );


}
getObjects()
{
  const geturl = 'http://haurtorrent.herokuapp.com/latest';
  this.http.get(geturl).subscribe(
    (res: any[]) => {
      console.log(res);
      this.actualTiles = res;
    }
  );
}
  getUserObjects()
  {
    console.log('Getting user objects');
    const geturl = 'http://haurtorrent.herokuapp.com/api/all';
    this.http.get(geturl).subscribe(
      (res: any[]) => {
        console.log(res);
        this.actualTilesUsers = res;
      }
    );
  }
  getSearchedObjects(event)
  {
    const geturl = 'http://haurtorrent.herokuapp.com/byname?name=' + event + '&page=1';
    this.http.get(geturl).subscribe(
      (res: any[]) => {
        console.log(res);
        console.log(event);
        this.actualTiles = res;
      }
    );
  }
  doDl( name )
  {
    const geturl = 'http://haurtorrent.herokuapp.com/api/banned';
    this.http.get(geturl).subscribe(
      (res: any) => {
        console.log(res);
        console.log(event);
        if((res === false) && (this.someoneLogged === 1))
          this.myWindowFct('http://haurtorrent.herokuapp.com/download?id=' + name.id);
      }
    );


  }
  doNewsDl( name )
  {
    const geturl = 'http://haurtorrent.herokuapp.com/api/banned';
    this.http.get(geturl).subscribe(
      (res: any) => {
        console.log(res);
        console.log(event);
        if((res === false) && (this.someoneLogged ===1))
          this.myWindowFct(name);
      }
    );
  }
  doNewDl( name )
{
  const geturl = 'http://haurtorrent.herokuapp.com/api/banned';
  this.http.get(geturl).subscribe(
    (res: any) => {
      console.log(res);
      console.log(event);
      if((res === false) && (this.someoneLogged === 1))
        this.myWindowFct('http://haurtorrent.herokuapp.com/download?id=' + name.id);
    }
  );
  //console.log('ssa');
}
 myWindowFct(url)
 {
   window.open(url);
 }
 myfct2()
 {
   const geturl = 'http://haurtorrent.herokuapp.com/api/user/logout';
   this.http.get(geturl).subscribe(
     (res: any[]) => {
       console.log(res);
     }
   );
 }

hello2(event)
{
  console.log('Hello2');
  console.log('Here ' + event);
}
nextPg()
{

  const geturl1 = 'http://haurtorrent.herokuapp.com/pages' ;
  this.http.get(geturl1).subscribe(
    (res: number) => {
      console.log(res);
      this.myMaxPages = res;
      if(this.myPage === this.myMaxPages)
      {
        this.myPage = 1;
        const geturl = 'http://haurtorrent.herokuapp.com/' + this.myPage;
        this.http.get(geturl).subscribe(
          (res: any[]) => {
            console.log(res);
            this.actualTiles = res;
          }
        );
      }
      if(this.myPage < this.myMaxPages) {
        this.myPage += 1;
        const geturl = 'http://haurtorrent.herokuapp.com/' + this.myPage;
        this.http.get(geturl).subscribe(
          (res: any[]) => {
            console.log(res);
            this.actualTiles = res;
          }
        );
      }

    }
  );

}
 firstTiles(event)
 {
   console.log(event);
   const geturl = 'http://haurtorrent.herokuapp.com/1'; //probably will be 'http://haurtorrent.herokuapp.com/1'
   this.http.get(geturl).subscribe(
     (res: any[]) => {
       console.log(res);
       this.actualTiles = res;
     }
   );
   console.log('Got tiles');
 }
 myUploadFct(event)
 {
   console.log(event);
   this.setFakeStyle();
 }
 loggedIn(event)
 {
   //if(this.someoneLogged)
   this.someoneLogged *= (-1);
 }
 banUser(user)
 {
   const geturl = 'http://haurtorrent.herokuapp.com/api/user/ban?userID=' + user.userName;
   this.http.get(geturl).subscribe(
     (res: any[]) => {
       console.log(res);
       this.getUserObjects();
     }
   );
 }

}

