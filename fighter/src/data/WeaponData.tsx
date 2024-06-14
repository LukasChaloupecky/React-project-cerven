import { ElementEnum } from "../components/player/Element";
import { Weapon, WeaponEnum } from "../components/player/Weapon";


// TODO : add images to the weapons
export const WeaponData: Weapon[] = [
    {
        id: WeaponEnum.SWORD,
        name: "Sword",
        damage: 30,
        cost: 10,
        element: ElementEnum.NONE,
        level: 1,
        ImgUrl: "/armors/vite.svg"

    },
    {
        id: WeaponEnum.AXE,
        name: "Axe",
        damage: 15,
        cost: 15,
        element: ElementEnum.NONE,
        level: 1,
        ImgUrl: "/armors/vite.svg"
    },
    {
        id: WeaponEnum.BOW,
        name: "Bow",
        damage: 20,
        cost: 20,
        element: ElementEnum.NONE,
        level: 1,
        ImgUrl: "images/weapon/sword.png"
    },
    {
        id: WeaponEnum.STAFF,
        name: "Staff",
        damage: 25,
        cost: 25,
        element: ElementEnum.NONE,
        level: 2,
        ImgUrl: "images/weapon/sword.png"
    }
]