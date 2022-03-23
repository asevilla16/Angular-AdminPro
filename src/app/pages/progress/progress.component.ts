import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent  {

  progreso1: number = 20;
  progreso2: number = 30;


  get getPorcentaje1(){
    return `${ this.progreso1 }%`;
  }

  get getPorcentaje2(){
    return `${ this.progreso2 }%`;
  }


}
