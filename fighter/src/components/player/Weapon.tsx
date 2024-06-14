import { ElementEnum } from "./Element"
import { Item } from "./Item"

export type Weapon = Item & {
    id: WeaponEnum,
    damage: number,
}

export enum WeaponEnum {
    SWORD,
    AXE,
    BOW,
    STAFF
}