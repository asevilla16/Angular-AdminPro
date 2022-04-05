import { ActivationEnd, Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  title: string = '';
  unsubscribe: Subject<void> = new Subject();

  constructor(private router: Router) { 
    this.getTitle();
  }

  getTitle(){
    this.router.events
      .pipe(
        filter((e): e is ActivationEnd => e instanceof ActivationEnd),
        filter((e: ActivationEnd) => e.snapshot.firstChild == null),
        map((e: ActivationEnd) => e.snapshot.data),
        takeUntil(this.unsubscribe)
      )
      .subscribe(
        data => {
          this.title = data.title;
          document.title = `AdminPro - ${this.title}`
        }
      )
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
