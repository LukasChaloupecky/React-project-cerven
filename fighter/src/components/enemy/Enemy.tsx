import { ElementEnum } from "../player/Element";

export type Enemy = {
    id : EnemyEnum,
    name : string,
    hp : number,
    score : number,
    damage : number,
    element : ElementEnum,
    level : number,
    imgUrl : string
    // TODO : image : string
}

export enum EnemyEnum {
    Goblin
}


