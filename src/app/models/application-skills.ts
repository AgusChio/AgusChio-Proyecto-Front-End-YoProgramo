import { TypeSkillEnum } from "./type-skill-enum";

export class ApplicationSkills {
    nombreSkill: string;
    porcentaje: number;
    imgsrc: string;
    colorInterno: string;
    colorExterno: string;
    typeSkills: TypeSkillEnum;
    nombre: string;
    apellido: string;


    constructor(nombreSkill: string ,porcentaje: number, imgsrc: string, colorInterno: string, colorExterno: string, typeSkills: TypeSkillEnum, nombre: string,apellido: string){
        this.nombreSkill = nombreSkill;
        this.porcentaje = porcentaje; 
        this.imgsrc = imgsrc;
        this.colorInterno = colorInterno;
        this.colorExterno = colorExterno;
        this.typeSkills = typeSkills;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
