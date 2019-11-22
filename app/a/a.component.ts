import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  @Input() link: any;
  @Input() name: string;
  @ViewChild('aRef') aRef: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  click() {
    this.aRef.nativeElement.click();
  }

}