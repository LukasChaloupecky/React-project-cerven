import { createContext } from "react"
import { WeaponData } from "../../data/WeaponData"
import { ArmorData } from "../../data/ArmorData"
import { Armor, ArmorType } from "./Armor"
import { Weapon } from "./Weapon"
import { Enemy } from "../enemy/Enemy"
import { HandleBoardGeneration } from "../methods/BoardGeneration"

export const Rules = {
    boardSize: 15,
    matchingElementMultiplier: 2,
    elementProtectionMultiplier: 0.1,
    maxHP : 100,
    maxMove : 3
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
    isFight : boolean,
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
    isFight : true,
    Board : HandleBoardGeneration({size: Rules.boardSize, level: 1})
}



export enum ActionEnum {
    CHANGE_WEAPON,
    CHANGE_ARMOR,
    CHANGE_SCORE,
    CHANGE_SPOT,
    CHANGE_LEVEL,
    IS_FIGHT,
    CHANGE_BOARD,
    /*
    ATTACK,
    DEFEND
    */
}
export type Action = 
| {type : ActionEnum.CHANGE_WEAPON, WEAPON_INDEX: number}  // ? WEAPON_ID is in weapon inventory and id is for the item
| {type : ActionEnum.CHANGE_ARMOR , ARMOR_INDEX: number} // ? ARMOR_ID is in armor inventory and id is for the item
| {type : ActionEnum.CHANGE_SCORE , SCORE_DIFFERENCE: number} // ? SCORE difference can be both positive and negative
| {type : ActionEnum.CHANGE_SPOT  , SPOT_DIFFERENCE: number} // ? SPOT is the new spot
| {type : ActionEnum.CHANGE_LEVEL , LEVEL_DIFFERENCE: number} // ? LEVEL is the new level
| {type : ActionEnum.IS_FIGHT} // ? LEVEL is the new level
| {type : ActionEnum.CHANGE_BOARD} // ? LEVEL is the new level
/*
| {type : ActionEnum.ATTACK       , ATTACK_CHOICE: FightChoice} 
| {type : ActionEnum.DEFEND}
*/



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
            let overlap = action.SPOT_DIFFERENCE + state.currentSpot - Rules.boardSize;
            let levelIncrease = (overlap > 0) ? 1 : 0;
            let board = (levelIncrease > 0) ? HandleBoardGeneration({size: Rules.boardSize, level: state.currentLevel + levelIncrease}) : state.Board;
            return {...state, currentSpot: (overlap > 0) ? overlap : action.SPOT_DIFFERENCE + state.currentSpot, currentLevel: state.currentLevel + levelIncrease, Board: board};
        case ActionEnum.CHANGE_LEVEL:
            return {...state, currentLevel: action.LEVEL_DIFFERENCE + state.currentLevel}; 
        case ActionEnum.IS_FIGHT:
            return {...state, isFight: !state.isFight};
        case ActionEnum.CHANGE_BOARD:
            return {...state, Board: HandleBoardGeneration({size: Rules.boardSize, level: state.currentLevel})};
        /*
        case ActionEnum.ATTACK: 
            let newBoard = structuredClone(state.Board);
            newBoard[state.currentSpot] = FightHandler({enemy: state.Board[state.currentSpot], gamestate: state, choice: action.ATTACK_CHOICE});
            return {...state, Board: newBoard};
        case ActionEnum.DEFEND: 
        const correct = Math.floor(Math.random() * 1); 
        if (correct === 1) return {...state, };
        return {...state};
        */
        default:
            return state
    }
};


export const GameContext = createContext<{ state: GameStateType, dispatch: React.Dispatch<Action> } | undefined>(undefined);