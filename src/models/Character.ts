export class Character {
    id: number;            // uuid
    name: string;
    initiative: number;    // 0..20
    hp: number;
    ac: number;

    constructor(id: number, name: string, initiative: number, hp: number, ac: number){
        this.id = id;
        this.name = name;
        this.initiative = initiative;
        this.hp = hp;
        this.ac = ac;
    }
}