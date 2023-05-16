export class Persona {
    id!: number;
    nombre: string;
    apellido: string;
    titulo: string;
    imagen: string;
    banner: string;
    descripcion: string;

    constructor(nombre: string, apellido: string, titulo: string, imagen: string,banner: string, descripcion: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.imagen = imagen;
        this.banner = banner;
        this.descripcion = descripcion;
    }
}
