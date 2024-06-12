import { ElementEnum } from "./Element"

export type Weapon = {
    id: WeaponEnum,
    name: string,
    damage: number,
    cost: number // ? For how much score can the item be sold
    element: ElementEnum 
}

export enum WeaponEnum {
    SWORD,
    AXE,
    BOW,
    STAFF
}