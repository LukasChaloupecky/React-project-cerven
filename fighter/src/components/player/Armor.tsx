import { ElementEnum } from "./Element"

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