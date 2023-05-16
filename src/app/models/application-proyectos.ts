export class ApplicationProyectos {
    nombreProyecto: string;
    imagen: string;
    descripcion: string;
    fechaRealizacion: string;
    urlVideo: string;
    urlGitHub: string;
    urlDeploy: string;
    nombre: string;
    apellido: string;

    constructor(nombreProyecto: string, imagen: string, descripcion: string,fechaRealizacion: string,urlVideo: string, urlGitHub: string, urlDeploy: string, nombre: string,apellido: string){
        this.nombreProyecto = nombreProyecto;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.fechaRealizacion = fechaRealizacion;
        this.urlVideo = urlVideo;
        this.urlGitHub = urlGitHub;
        this.urlDeploy = urlDeploy;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
