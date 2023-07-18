import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Producto } from '../interfaces/productos';
//import { MatPaginator } from '@angular/material/paginator';
//import { merge, of } from 'rxjs';
//import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-produt-list',
  templateUrl: './produt-list.component.html',
  styleUrls: ['./produt-list.component.scss']
})
export class ProdutListComponent {
  @Input() listProduct: Producto[] = [];

  //@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  @Output()
  eventoHijo = new EventEmitter<Producto>();

  constructor(){}

  /*onEdit(producto: Producto){
    this.eventoHijo.emit(producto);
  }*/

  onDelet(producto: Producto){
    this.eventoHijo.emit(producto);
  }
}