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
        // TODO : get the armor by id
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
    ADD_ARMOR,
    REMOVE_ARMOR,
    ADD_WEAPON,
    REMOVE_WEAPON
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
| {type : ActionEnum.IS_FIGHT     , IS_FIGHT: boolean} // ? LEVEL is the new level
| {type : ActionEnum.CHANGE_BOARD} // ? LEVEL is the new level
| {type : ActionEnum.ADD_ARMOR    , ARMOR: Armor}
| {type : ActionEnum.REMOVE_ARMOR  , ARMOR_INDEX: number}
| {type : ActionEnum.ADD_WEAPON    , WEAPON: Weapon}
| {type : ActionEnum.REMOVE_WEAPON  , WEAPON_INDEX: number}

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
            let newArmorInventory = state.armorInventory.filter((_, index) => index !== action.ARMOR_INDEX);
            let currentArmor;
            switch(armor.type){
                case ArmorType.HELMET:
                    currentArmor = state.selectedArmor.helmet;
                    break;
                case ArmorType.BREASTPLATE:
                    currentArmor = state.selectedArmor.breastplate;
                    break;
                case ArmorType.PANTS:
                    currentArmor = state.selectedArmor.pants;
                    break;
                case ArmorType.BOOTS:
                    currentArmor = state.selectedArmor.boots;
                    break;
            }
            newArmorInventory.push(currentArmor);
            return {...state, selectedArmor: {
                helmet:      armor.type === ArmorType.HELMET      ? armor : state.selectedArmor.helmet,
                breastplate: armor.type === ArmorType.BREASTPLATE ? armor : state.selectedArmor.breastplate,
                pants:       armor.type === ArmorType.PANTS       ? armor : state.selectedArmor.pants,
                boots:       armor.type === ArmorType.BOOTS       ? armor : state.selectedArmor.boots
            },
            armorInventory: newArmorInventory
        }; 
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
            return {...state, isFight: action.IS_FIGHT};
        case ActionEnum.CHANGE_BOARD:
            return {...state, Board: HandleBoardGeneration({size: Rules.boardSize, level: state.currentLevel})};
        case ActionEnum.ADD_ARMOR:
            let armorInventory = structuredClone(state.armorInventory);
            armorInventory.push(action.ARMOR);
            return {...state, armorInventory: armorInventory};
        case ActionEnum.REMOVE_ARMOR:
            if (state.armorInventory.length-1 > action.ARMOR_INDEX) throw new Error("Cannot remove the last armor");
            return {...state, armorInventory: state.armorInventory.filter((_, index) => index !== action.ARMOR_INDEX)};
        case ActionEnum.ADD_WEAPON:
            let weaponInventory = structuredClone(state.weaponInventory);
            weaponInventory.push(action.WEAPON);
            return {...state, weaponInventory: weaponInventory};
        case ActionEnum.REMOVE_WEAPON:
            if (state.weaponInventory.length-1 > action.WEAPON_INDEX) throw new Error("Cannot remove the last weapon");
            return {...state, weaponInventory: state.weaponInventory.filter((_, index) => index !== action.WEAPON_INDEX)};
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


export const GameContext = createContext<{ state: GameStateType, dispatch: React.Dispatch<Action> }>({ state: InitialGameState, dispatch: () => null });