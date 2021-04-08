import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parouimpar',
  templateUrl: './parouimpar.component.html',
  styleUrls: ['./parouimpar.component.css']
})
export class ParouimparComponent implements OnInit {

parImpar:number;
isPar(){
  return this.parImpar%2 == 0;
}
isImpar(){
  return this.parImpar%2 != 0;
}

  constructor() { }

  ngOnInit() {
  }

}