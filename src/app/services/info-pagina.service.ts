import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IInfoPagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: IInfoPagina = {};
  equipo: any[] = [];
  cargando = true;

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: IInfoPagina) => {

      this.info = resp;
      this.cargando = false;
      // console.log(resp);

    });
  }

  private cargarEquipo() {
    this.http.get('https://portafolio-c7184.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {

      this.cargada = true;
      this.equipo = resp;
      console.log(resp);

    });
  }
}
