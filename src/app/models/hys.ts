import { TypeSkillEnum } from "./type-skill-enum";

export class Hys {

    id!: number;
    porcentaje: number;
    imgsrc: string;
    colorInterno: string;
    colorExterno: string;
    typeSkills: TypeSkillEnum;

    constructor(porcentaje: number, imgsrc: string, colorInterno: string, colorExterno: string, typeSkills: TypeSkillEnum){
        this.porcentaje = porcentaje; 
        this.imgsrc = imgsrc;
        this.colorInterno = colorInterno;
        this.colorExterno = colorExterno;
        this.typeSkills = typeSkills;
    }

}
