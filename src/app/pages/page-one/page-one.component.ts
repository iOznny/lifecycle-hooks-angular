import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html'
})

export class PageOneComponent implements OnInit, OnChanges, DoCheck, 
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    console.log('Constructor PageOne');    
  }

  ngOnInit(): void {
    console.log('NgOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method ngOnChanges ');
  }

  ngDoCheck(): void {
    console.log('Method ngDoCheck ');
  }

  ngAfterContentInit(): void {
    console.log('Method ngAfterContentInit ');
  }

  ngAfterContentChecked(): void {
    console.log('Method ngAfterContentChecked ');
  }

  ngAfterViewInit(): void {
    console.log('Method ngAfterViewInit ');
  }

  ngAfterViewChecked(): void {
    console.log('Method ngAfterViewChecked ');
  }

  ngOnDestroy(): void {
    console.log('Method ngOnDestroy ');
  }

}