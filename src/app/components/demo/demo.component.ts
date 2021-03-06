import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html'
})

export class DemoComponent implements OnInit, OnChanges {

  @Input() nombre!: string;

  constructor() { }
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

}
