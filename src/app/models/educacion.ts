export class Educacion {
    id!: number;
    titulo: string;
    entidadEducativa: string;
    inicio: string;
    fin: string;
    imagenCertificado: string;

    constructor(titulo: string, entidadEducativa: string, inicio: string, fin: string, imagenCertificado: string){
        this.titulo = titulo;
        this.entidadEducativa = entidadEducativa;
        this.inicio = inicio;
        this.fin = fin;
        this.imagenCertificado = imagenCertificado;
    }
}
