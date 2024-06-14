import { ElementEnum } from "./Element"
import { Item } from "./Item"
/*
export type Armor = {
    id: ArmorEnum,
    name: string,
    defense: number,
    cost: number // ? For how much score can the item be sold
    type: ArmorType,
    element: ElementEnum,
    level: number
    ImgUrl : string
}
*/
export type Armor = Item & {
    id: ArmorEnum,
    type: ArmorType,
    defense: number
}

export enum ArmorEnum {
    MetalHelmet,
    LeatherHelmet,
    MetalBreastplate,
}

export enum ArmorType{
    HELMET,
    BREASTPLATE,
    PANTS,
    BOOTS
}