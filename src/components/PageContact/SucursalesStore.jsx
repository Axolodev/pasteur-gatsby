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
    const data = [
        { id: 1, nombre: 'Suc. Valle Soleado', direccion: "Ave. Israel Cavzos No. 342, Col. Valle Soleado, Guadalupe, N.L.", latitud: 25.645376, longitud: -100.191684 },
        { id: 2, nombre: 'Suc. Coahuila', direccion: "Ave. Coahuila No. 406, Col. Coahuila, Juárez, N.L.", latitud: 25.648376, longitud: -100.199705 },
        { id: 3, nombre: 'Suc. Santa Mónica', direccion: "Ave. Acueducto No. 809, Col. Santa Isabel, Juárez, N.L.", latitud: 25.655559, longitud: -100.199995 },
        { id: 4, nombre: 'Suc. Zertuche', direccion: "Ave. Eloy Cavazos, No. 5729-A, Col. Zertuche, Guadalupe, N.L.", latitud: 25.673432, longitud: -100.192929 },
        { id: 5, nombre: 'Suc. Las Torres', direccion: "Ave. Calle Camino al Mirador, Col. del Paseo Residencial, Monterrey, N.L.", latitud: 25.673432, longitud: -100.192929 },
        { id: 6, nombre: 'Suc. Fomerrey 18', direccion: "Ave. Cuernavaca No. #1800-A, Col. Nuevo San Miguel, Guadalupe, N.L.", latitud: 25.673432, longitud: -100.192929 },
        { id: 7, nombre: 'Suc. La Luz', direccion: "Ave. Paseo de la Luz #102, Plaza \"La Luz\" local 8, Monterrey, N.L.", latitud: 25.673432, longitud: -100.192929 }
    ];
    this.setSucursales(data);
  }

  setSucursales = (data) => {
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