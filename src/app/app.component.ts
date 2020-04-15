import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Ryan';
  itembuah = [{
    nama:'Apel',
    jumlah: 1000
  },{
    nama:'Jerul',
    jumlah:3000
  }];
  show = false;
  pesan="";
  klikbutton(){
    this.pesan = 'tombol ditekan';
  }
}
