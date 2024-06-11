
enum ActionEnum {
    CHANGE_WEAPON,
    CHANGE_HELMET,
    CHANGE_BREASTPLATE,
    CHANGE_PANTS,
    CHANGE_BOOTS
}
type Action = {type: ActionEnum.CHANGE_WEAPON, WEAPON_ID: number}  // ? WEAPON_ID is in weapon inventory and id is for the item

type ArmorState = {
    helmet: Armor,
    breastplate: Armor,
    pants: Armor,
    boots: Armor
}
type GameState = {
    selectedWeapon: Weapon,
    selectedArmor: ArmorState, 
    weaponInventory: Weapon[],
    armorInventory: Armor[],
    score: number,
    currentSpot: number, // ? The spot in the room
    currentLevel: number // ? The level of the room
}
