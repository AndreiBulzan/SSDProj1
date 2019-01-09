import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {TileClass} from '../../tile-class';
import {HttpClient, HttpParams} from '@angular/common/http';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Output() myDlEvent = new EventEmitter<string>();
  callParentDownload(name) {
    this.myDlEvent.emit('http://haurtorrent.herokuapp.com/download?id=' + name.id);
  }
heroes: string[] = [ 'Object1', 'Object2', 'Object3'];
tiles: TileClass[];
url = 'http://haurtorrent.herokuapp.com/';
myids: string[] = [ 'idnews1', 'idnews2', 'idnews3'];
rating = [1, 3, 5];
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    console.log('Trying to get news tiles too');
      const geturl = 'http://haurtorrent.herokuapp.com/latest';
      this.http.get(geturl).subscribe(
        (res: any[]) => {
          console.log(res);
          this.tiles = res;
          let i = 0;
          for (let re of res) {
            this.heroes[i] = (<TileClass>re).name.toString();
            i++;
          }
          console.log('Got news tiles');
        }
      );

  }
  doNewDl( name )
  {
    this.callParentDownload(name);
    //window.open('http://haurtorrent.herokuapp.com/download?id=' + name.id);
  }
  doRate( name )
  {

    console.log(name);
    console.log(name.rating);
    const url = this.url + `api/rate?id=${1}&mark=${name.rating}`;
    this.http.get(url).subscribe(
      res  => {
        console.log(res);
      }
    );
  }
}
