import { Component, ViewChild, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  mensaje: string = "";
  
  //Boleano para Ocultar y Mostrar Lista
  isList: boolean = false;

  productList: Producto[] = [
    {
      id: 1,
      nombre: 'Cargador Notebook',
      costo: '$7000'
    },
    {
      id: 2,
      nombre: 'Joystick PS4',
      costo: '$20000'
    },
    {
      id: 3,
      nombre: 'Joystick PC',
      costo: '$5000'
    },
    {
      id: 4,
      nombre: 'Control Remoto TV',
      costo: '$2000'
    },
    {
      id: 5,
      nombre: 'Cable HDMI',
      costo: '$1500'
    },
    {
      id: 6,
      nombre: 'Router 3 Ant.',
      costo: '$7500'
    },
    {
      id: 7,
      nombre: 'Cable Tipo C',
      costo: '$1500'
    },
  ];

  selectProduct: Producto[] = [
    {
      id: this.productList.length + 1,
      nombre: '',
      costo: ''
    }
  ];

  i: number = 0;

  
  constructor(){}

  //Oculta y Muesta la lista de productos
  onClick(){
    if(this.isList == false){
      this.isList = true;
    }
    else if(this.isList == true){
      this.isList = false;
    }
  }

  //Agrega producto a la lista
  addProduct(){
    this.productList.push(this.selectProduct[this.i]);

    this.selectProduct.push({
      id: this.productList.length + 1,
      nombre: '',
      costo: ''
    });

    this.i += 1;
  }

  procesaPropagar(mensaje: Producto) {
    console.log(mensaje);
    //Elimina producto de la lista
    for (let i = 0; i < this.productList.length; i++) {
      if(mensaje == this.productList[i]){
        if(confirm("Seguro que quiere eliminar el Producto")){
          this.productList.splice(i, 1);
        }
      }
    }
  }
}