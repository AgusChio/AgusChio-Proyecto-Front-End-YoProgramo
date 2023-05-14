export class Educacion {
    id!: number;
    titulo: string;
    entidadEducativa: string;
    inicio: Date;
    fin: Date;
    imagenCertificado: string;

    constructor(titulo: string, entidadEducativa: string, inicio: Date, fin: Date, imagenCertificado: string){
        this.titulo = titulo;
        this.entidadEducativa = entidadEducativa;
        this.inicio = inicio;
        this.fin = fin;
        this.imagenCertificado = imagenCertificado;
    }
}
