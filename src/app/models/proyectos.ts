export class Proyectos{
    id!: number;
    nombreProyecto: string;
    imagen: string;
    descripcion: string;
    fechaRealizacion: Date;
    urlVideo: string;
    urlGitHub: string;
    urlDeploy: string;

    constructor(nombreProyecto: string, imagen: string, descripcion: string,fechaRealizacion: Date,urlVideo: string, urlGitHub: string, urlDeploy: string){
        this.nombreProyecto = nombreProyecto;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.fechaRealizacion = fechaRealizacion;
        this.urlVideo = urlVideo;
        this.urlGitHub = urlGitHub;
        this.urlDeploy = urlDeploy;
    }
}