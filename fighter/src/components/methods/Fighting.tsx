import { Enemy } from "../enemy/Enemy";
import { GameStateType, Rules } from "../player/GameState";

export const FightHandler = ({gamestate, choice, enemy} : {gamestate : GameStateType, choice : FightChoice, enemy : Enemy}) => {
    const correct = Math.floor(Math.random() * 2); 
    let damage : number = 0;
    if (correct === choice.valueOf()) {
        damage = (enemy.element === gamestate.selectedWeapon.element) ? (gamestate.selectedWeapon.damage * Rules.matchingElementMultiplier)  : gamestate.selectedWeapon.damage;
    }
    return damage;
}

export const DefenseHandler = ({enemy, gamestate} : { enemy : Enemy, gamestate : GameStateType}) => {
    const IsAttacked = Math.floor(Math.random() *2 ); // TODO : Decide about the 1 => 50% chance of getting attacked
    console.log(Math.random() + " " + IsAttacked);
    let HP : number = Rules.maxHP;
    let attack : number = enemy.damage;
    if (IsAttacked === 1) {
        let elementDefense : number = enemy.damage*Rules.elementProtectionMultiplier;

        if (gamestate.selectedArmor.helmet.element === enemy.element)      attack -= elementDefense;
        if (gamestate.selectedArmor.breastplate.element === enemy.element) attack -= elementDefense;
        if (gamestate.selectedArmor.pants.element === enemy.element)       attack -= elementDefense;
        if (gamestate.selectedArmor.boots.element === enemy.element)       attack -= elementDefense;
    }
    return attack;
}

export enum FightChoice {
    FastAttack = 0,
    StrongAttack = 1
}