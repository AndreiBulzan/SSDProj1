import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppModule} from '../../../app.module';
import {AppComponent} from '../../../app.component';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {TileClass} from '../../../tile-class';
import {MySearchClass} from '../../../my-search-class';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  @Output() myOtherEvent = new EventEmitter<string>();
  callParent() {
    this.myOtherEvent.emit(this.myVar);
  }
  myVar: string;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<any[]>;


  constructor(public parent: AppComponent) { }
  tiles = [
    {text: 'One', rating: 8, cols: 3, rows: 3, color: 'lightblue', download: 'www.dl.com'},
    {text: 'Two', rating: 2, cols: 3, rows: 3, color: 'lightgreen', download: 'www.dl.com'},
    {text: 'Three', rating: 5, cols: 3, rows: 3, color: 'lightpink', download: 'www.dl.com'},
    {text: 'Four', rating: 8, cols: 3, rows: 3, color: '#DDBDF1', download: 'www.dl.com'},
    {text: '5', rating: 8, cols: 3, rows: 3, color: 'lightblue', download: 'www.dl.com'},
    {text: '6', rating: 10, cols: 3, rows: 3, color: 'lightgreen', download: 'www.dl.com'},
    {text: '7', rating: 8,  cols: 3, rows: 3, color: 'lightpink', download: 'www.dl.com'},
    {text: '8', rating: 1,  cols: 3, rows: 3, color: '#DDBDF1', download: 'www.dl.com'},
    {text: '9', rating: 8,  cols: 3, rows: 3, color: 'lightblue', download: 'www.dl.com'},
    {text: '11', rating: 8,  cols: 3, rows: 3, color: 'lightgreen', download: 'www.dl.com'},
    {text: '12', rating: 8,  cols: 3, rows: 3, color: 'lightpink', download: 'www.dl.com'},
    {text: '13', rating: 8,  cols: 3, rows: 3, color: '#DDBDF1', download: 'www.dl.com'},
  ];
  //autoFillStrings = ['abc','esd','aaa'];

  mySearchOptions = [{text:'abc'},{text:'def'},{text:'a1'},{text:'d1'},{text:'a2'},{text:'d2'}];
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(null),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): any[] {
    console.log(value);
    return this.mySearchOptions.filter((s) => new RegExp(value, 'gi').test(s.text));
    //return this.testTiles.filter((s) => new RegExp(value, 'gi').test(s.name));
  }

  someAction() {
    this.parent.myVar = this.myVar;
    console.log('123');
  }
  myFunc(event)
  {
    if (event.key === 'Enter') {
    this.callParent();
    console.log(this.myVar);
    }
  }

}
