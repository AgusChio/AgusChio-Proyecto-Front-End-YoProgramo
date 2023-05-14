export class SobreMi{
    id!: number;
    parrafo1: string;
    parrafo2: string;
    cv: string;

    constructor(parrafo1: string, parrafo2: string, cv: string){
        this.parrafo1 = parrafo1;
        this.parrafo2 = parrafo2;
        this.cv = cv;
    }
}