import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() progreso: number = 50;
  @Input() buttonClass: string = 'btn btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  onChange(value: number){
    if(value >= 100) {
      this.progreso = 100;
    } else if(value <= 0){
      this.progreso = 0
    } else{
      this.progreso = value;
    }
    this.valorSalida.emit(this.progreso);
  }


  changeValue(val: number){
    if(this.progreso >= 100 && val >=0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    if(this.progreso <= 0 && val < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0
    }

    this.progreso = this.progreso + val;
    this.valorSalida.emit(this.progreso);
    // console.log(this.progreso);
    return this.progreso;
  }

}
