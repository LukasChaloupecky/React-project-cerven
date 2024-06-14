import { ElementEnum } from "./Element"

export type Item = {
    name: string,
    cost: number // ? For how much score can the item be sold
    element: ElementEnum,
    level: number
    ImgUrl : string
}