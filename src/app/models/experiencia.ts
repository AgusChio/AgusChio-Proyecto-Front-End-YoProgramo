export class Experiencia {
    id!: number;
    tituloServicios: string;
    descripcion: string;

    constructor(tituloServicio: string, descripcion: string){
        this.tituloServicios = tituloServicio;
        this.descripcion = descripcion;
    }
}
