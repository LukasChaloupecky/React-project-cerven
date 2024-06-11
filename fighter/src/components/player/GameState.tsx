import { createContext } from "react"



type ArmorState = {
    helmet: Armor,
    breastplate: Armor,
    pants: Armor,
    boots: Armor
}
export type GameStateType = {
    selectedWeapon: Weapon,
    selectedArmor: ArmorState, 
    weaponInventory: Weapon[],
    armorInventory: Armor[],
    score: number,
    currentSpot: number, // ? The spot in the room
    currentLevel: number // ? The level of the room
}
export const InitialGameState: GameStateType = {
    selectedWeapon: WeaponsData[0],
    selectedArmor: {
        helmet: ArmorData[0],
        breastplate: ArmorData[2],
        pants: ArmorData[3],
        boots: ArmorData[4]
    },
    weaponInventory: [],
    armorInventory: [],
    score: 0,
    currentSpot: 0,
    currentLevel: 1
}



export enum ActionEnum {
    CHANGE_WEAPON,
    CHANGE_ARMOR,
    CHANGE_SCORE,
    CHANGE_SPOT,
    CHANGE_LEVEL
}
export type Action = 
| {type : ActionEnum.CHANGE_WEAPON, WEAPON_INDEX: number}  // ? WEAPON_ID is in weapon inventory and id is for the item
| {type : ActionEnum.CHANGE_ARMOR , ARMOR_INDEX: number} // ? ARMOR_ID is in armor inventory and id is for the item
| {type : ActionEnum.CHANGE_SCORE , SCORE: number} // ? SCORE is the new score
| {type : ActionEnum.CHANGE_SPOT  , SPOT: number} // ? SPOT is the new spot
| {type : ActionEnum.CHANGE_LEVEL , LEVEL: number} // ? LEVEL is the new level



export const GameState = (state : GameStateType, action: Action) => {
    switch(action.type){
        case ActionEnum.CHANGE_WEAPON:
            return {...state, selectedWeapon: state.weaponInventory[action.WEAPON_INDEX]};
        case ActionEnum.CHANGE_ARMOR:
            const armor = state.armorInventory[action.ARMOR_INDEX];
            return {...state, selectedArmor: {
                helmet:      armor.type === ArmorType.HELMET      ? armor : state.selectedArmor.helmet,
                breastplate: armor.type === ArmorType.BREASTPLATE ? armor : state.selectedArmor.breastplate,
                pants:       armor.type === ArmorType.PANTS       ? armor : state.selectedArmor.pants,
                boots:       armor.type === ArmorType.BOOTS       ? armor : state.selectedArmor.boots
            }}; 
        case ActionEnum.CHANGE_SCORE:
            return {...state, score: action.SCORE};
        case ActionEnum.CHANGE_SPOT:
            return {...state, currentSpot: action.SPOT};
        case ActionEnum.CHANGE_LEVEL:
            return {...state, currentLevel: action.LEVEL}; 
        default:
            return state
    }
};


export const GameContext = createContext<{ state: GameStateType; dispatch: React.Dispatch<Action> } | undefined>(undefined);