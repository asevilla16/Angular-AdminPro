import { Component } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  constructor() { 
    let i = -1;

    const obs = new Observable(observer => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if(i == 4){
          clearInterval(interval);
          observer.complete();
        }

        if(i == 2){
          observer.error('An error has happened');
        }
      }, 1000)
    });

    obs
      .pipe(
        retry(2),
      )
      .subscribe(
        res => console.log('Subs: ', res),
        err => console.warn('Error: ', err),
        () => console.info('Observable done')
      )
  }


}
