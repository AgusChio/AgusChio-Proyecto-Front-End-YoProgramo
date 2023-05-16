export class ApplicationEducacion {
    titulo: string;
    entidadEducativa: string;
    inicio: string;
    fin: string;
    imagenCertificado: string;
    nombre: string;
    apellido: string;

    constructor(titulo: string, entidadEducativa: string, inicio: string, fin: string, imagenCertificado: string, nombre: string,apellido: string){
        this.titulo = titulo;
        this.entidadEducativa = entidadEducativa;
        this.inicio = inicio;
        this.fin = fin;
        this.imagenCertificado = imagenCertificado;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
