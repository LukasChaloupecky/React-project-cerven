type Armor = {
    id: ArmorEnum,
    name: string,
    defense: number,
    cost: number // ? For how much score can the item be sold
    type: ArmorType,
    element: ElementEnum
}
enum ArmorEnum {
    MetalHelmet,
    LeatherHelmet,
    MetalBreastplate,
}

enum ArmorType{
    HELMET,
    BREASTPLATE,
    PANTS,
    BOOTS
}