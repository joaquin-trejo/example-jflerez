import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Output() agregarAlCarrito: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  public agregarAlCarritoFn = (): void => this.agregarAlCarrito.emit();

}
