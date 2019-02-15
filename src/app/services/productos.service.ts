import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducto } from '../interfaces/productos-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  produtos: IProducto[] = [];

  constructor(private _http: HttpClient) {
    console.log('Productos ok');
    this.cargarProductos();
   }

  private cargarProductos() {
    this._http.get('https://portafolio-c7184.firebaseio.com/productos_idx.json').subscribe( (resp: IProducto[]) => {
      this.produtos = resp;

      setTimeout(() => {
        this.cargando = false;
      }, 500);

    });
  }
}
