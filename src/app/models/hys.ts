import { TypeSkillEnum } from "./type-skill-enum";

export class Hys {

    id!: number;
    nombreSkill: string;
    porcentaje: number;
    imgsrc: string;
    colorInterno: string;
    colorExterno: string;
    typeSkills: TypeSkillEnum;

    constructor(nombreSkill: string ,porcentaje: number, imgsrc: string, colorInterno: string, colorExterno: string, typeSkills: TypeSkillEnum){
        this.nombreSkill = nombreSkill;
        this.porcentaje = porcentaje; 
        this.imgsrc = imgsrc;
        this.colorInterno = colorInterno;
        this.colorExterno = colorExterno;
        this.typeSkills = typeSkills;
    }

}