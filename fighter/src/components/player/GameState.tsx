import { createContext } from "react"
import { WeaponData } from "../../data/WeaponData"
import { ArmorData } from "../../data/ArmorData"
import { Armor, ArmorType } from "./Armor"
import { Weapon } from "./Weapon"
import { Enemy } from "../enemy/Enemy"
import { BoardGeneration } from "../methods/BoardGeneration"

export const Rules = {
    boardSize: 8
}

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
    Board : Enemy[]
}
export const InitialGameState: GameStateType = {
    selectedWeapon: WeaponData[0],
    selectedArmor: {
        helmet: ArmorData[0],
        breastplate: ArmorData[1],
        pants: ArmorData[2],
        boots: ArmorData[3]
    },
    weaponInventory: [],
    armorInventory: [],
    score: 0,
    currentSpot: 0,
    currentLevel: 1,
    Board : BoardGeneration({size: Rules.boardSize, level: 1})
}



export enum ActionEnum {
    CHANGE_WEAPON,
    CHANGE_ARMOR,
    CHANGE_SCORE,
    CHANGE_SPOT,
    CHANGE_LEVEL,
    CHANGE_BOARD
}
export type Action = 
| {type : ActionEnum.CHANGE_WEAPON, WEAPON_INDEX: number}  // ? WEAPON_ID is in weapon inventory and id is for the item
| {type : ActionEnum.CHANGE_ARMOR , ARMOR_INDEX: number} // ? ARMOR_ID is in armor inventory and id is for the item
| {type : ActionEnum.CHANGE_SCORE , SCORE_DIFFERENCE: number} // ? SCORE difference can be both positive and negative
| {type : ActionEnum.CHANGE_SPOT  , SPOT_DIFFERENCE: number} // ? SPOT is the new spot
| {type : ActionEnum.CHANGE_LEVEL , LEVEL_DIFFERENCE: number} // ? LEVEL is the new level
| {type : ActionEnum.CHANGE_BOARD} // ? LEVEL is the new level



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
            return {...state, score: action.SCORE_DIFFERENCE + state.score};
        case ActionEnum.CHANGE_SPOT:
            return {...state, currentSpot: action.SPOT_DIFFERENCE + state.currentSpot};
        case ActionEnum.CHANGE_LEVEL:
            return {...state, currentLevel: action.LEVEL_DIFFERENCE + state.currentLevel}; 
        case ActionEnum.CHANGE_BOARD:
            return {...state, Board: BoardGeneration({size: Rules.boardSize, level: state.currentLevel})};
        default:
            return state
    }
};


export const GameContext = createContext<{ state: GameStateType; dispatch: React.Dispatch<Action> } | undefined>(undefined);