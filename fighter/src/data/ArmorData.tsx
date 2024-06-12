import { Armor, ArmorEnum, ArmorType } from "../components/player/Armor";
import { ElementEnum } from "../components/player/Element";


// TODO : add images and its sources to the armors
export const ArmorData: Armor[] = [
    {
        id: ArmorEnum.MetalHelmet,
        name: "Metal Helmet",
        defense: 5,
        cost: 10,
        type: ArmorType.HELMET,
        element: ElementEnum.NONE,
        level: 1,
        ImgUrl: "/armor/metal_helmet.png"
    },
    {
        id: ArmorEnum.LeatherHelmet,
        name: "Leather Helmet",
        defense: 3,
        cost: 5,
        type: ArmorType.HELMET,
        element: ElementEnum.NONE,
        level: 1,
        ImgUrl: "images/armor/leather_helmet.png"
    },
    {
        id: ArmorEnum.MetalBreastplate,
        name: "Metal Breastplate",
        defense: 10,
        cost: 20,
        type: ArmorType.BREASTPLATE,
        element: ElementEnum.NONE,
        level: 2,
        ImgUrl: "images/armor/metal_breastplate.png"
    },
    {
        id: ArmorEnum.MetalBreastplate,
        name: "Metal Breastplate",
        defense: 10,
        cost: 20,
        type: ArmorType.BREASTPLATE,
        element: ElementEnum.NONE,
        level: 1,
        ImgUrl: "images/armor/metal_breastplate.png"
    }
    
]