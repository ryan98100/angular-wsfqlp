import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Ryan';
  item = [{
    nama:'Kelengkeng',
    jumlah: 1
  },
  {
    nama:'Kelereng',
    jumlah:3
  }]
}
