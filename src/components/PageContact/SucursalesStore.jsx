import { observable, decorate, action, configure } from 'mobx';
import fetch from 'isomorphic-fetch';

configure({ enforceActions: true });

class _SucursalesStore {
  sucursales = [];
  arrivedData = "pending";

  constructor() {
    this.fetchSucursales();
  }

  fetchSucursales = () => {
    /* const data = [
        { id: 1, nombre: 'Suc. Valle Soleado', direccion: {calle: 'Ave. Israel Cavazos No. 342,', colonia: 'Col. Valle Soleado,', ciudad: 'Guadalupe, N.L.'}, latitud: 25.645376, longitud: -100.191684 },
        { id: 2, nombre: 'Suc. Valle Soleado', direccion: {calle: 'Ave. Israel Cavazos No. 342,', colonia: 'Col. Valle Soleado,', ciudad: 'Guadalupe, N.L.'}, latitud: 25.648376, longitud: -100.199705 },
        { id: 3, nombre: 'Suc. Valle Soleado', direccio	n: {calle: 'Ave. Israel Cavazos No. 342,', colonia: 'Col. Valle Soleado,', ciudad: 'Guadalupe, N.L.'}, latitud: 25.655559, longitud: -100.199995 },
        { id: 4, nombre: 'Suc. Valle Soleado', direccion: {calle: 'Ave. Israel Cavazos No. 342,', colonia: 'Col. Valle Soleado,', ciudad: 'Guadalupe, N.L.'}, latitud: 25.666392, longitud: -100.187814 },
        { id: 5, nombre: 'Suc. Valle Soleado', direccion: {calle: 'Ave. Israel Cavazos No. 342,', colonia: 'Col. Valle Soleado,', ciudad: 'Guadalupe, N.L.'}, latitud: 25.673432, longitud: -100.192929 }
    ]; */
    fetch("http://www.mocky.io/v2/5b3a8f682e00003f2315825e")
      .then(response => response.json())
      .then(data => this.setSucursales(data));

  }

  setSucursales = data => {
    this.sucursales = data;
    this.arrivedData = "success";
  }

}

let SucursalesStore = decorate(_SucursalesStore, {
  sucursales: observable,
  arrivedData: observable,
  fetchSucursales: action,
  setSucursales: action
});

export default new SucursalesStore();