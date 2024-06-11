


type ArmorState = {
    helmet: Armor,
    breastplate: Armor,
    pants: Armor,
    boots: Armor
}
type GameStateType = {
    selectedWeapon: Weapon,
    selectedArmor: ArmorState, 
    weaponInventory: Weapon[],
    armorInventory: Armor[],
    score: number,
    currentSpot: number, // ? The spot in the room
    currentLevel: number // ? The level of the room
}
const InitialGameState: GameStateType = {
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



enum ActionEnum {
    CHANGE_WEAPON,
    CHANGE_ARMOR,
    CHANGE_SCORE,
    CHANGE_SPOT,
    CHANGE_LEVEL
}
type Action = {type: ActionEnum.CHANGE_WEAPON, WEAPON_INDEX: number}  // ? WEAPON_ID is in weapon inventory and id is for the item
| {type : ActionEnum.CHANGE_ARMOR, ARMOR_INDEX: number} // ? ARMOR_ID is in armor inventory and id is for the item
| {type : ActionEnum.CHANGE_SCORE, SCORE: number} // ? SCORE is the new score
| {type : ActionEnum.CHANGE_SPOT, SPOT: number} // ? SPOT is the new spot
| {type : ActionEnum.CHANGE_LEVEL, LEVEL: number} // ? LEVEL is the new level



const GameState = (state: GameStateType, action: Action) => {
    switch(action.type){
        case ActionEnum.CHANGE_WEAPON:
            return {...state, selectedWeapon: state.weaponInventory[action.WEAPON_INDEX]}
        case ActionEnum.CHANGE_ARMOR:
            return {...state, selectedArmor: state.armorInventory[action.ARMOR_INDEX]}
        case ActionEnum.CHANGE_SCORE:
            return {...state, score: action.SCORE}
        case ActionEnum.CHANGE_SPOT:
            return {...state, currentSpot: action.SPOT}
        case ActionEnum.CHANGE_LEVEL:
            return {...state, currentLevel: action.LEVEL}
        default:
            return state
    }
}