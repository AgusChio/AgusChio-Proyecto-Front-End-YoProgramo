export class Experiencia {
    id!: number;
    tituloServicio: string;
    descripcion: string;

    constructor(tituloServicio: string, descripcion: string){
        this.tituloServicio = tituloServicio;
        this.descripcion = descripcion;
    }
}
