import { TypeSkillEnum } from "./type-skill-enum";

export class Hys {
    id!: number;
    nombreSkill: string;
    porcentaje: number;
    imgsrc: string;
    colorInterno: string;
    colorExterno: string;
    typeSkills: TypeSkillEnum;

    constructor(id: number,nombreSkill: string ,porcentaje: number, imgsrc: string, colorInterno: string, colorExterno: string, typeSkills: TypeSkillEnum){
        this.id = id;
        this.nombreSkill = nombreSkill;
        this.porcentaje = porcentaje; 
        this.imgsrc = imgsrc;
        this.colorInterno = colorInterno;
        this.colorExterno = colorExterno;
        this.typeSkills = typeSkills;
    }

}