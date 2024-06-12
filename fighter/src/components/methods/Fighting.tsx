import { Enemy } from "../enemy/Enemy";
import { GameStateType, Rules } from "../player/GameState";

export const FightHandler = ({enemy, gamestate, choice} : { enemy : Enemy, gamestate : GameStateType, choice : FightChoice}) => {
    const correct = Math.floor(Math.random() * 1); 
    if (correct === choice.valueOf()) {
        let damage = (choice === FightChoice.FastAttack) ? (gamestate.selectedWeapon.damage * Rules.matchingElementMultiplier)  : gamestate.selectedWeapon.damage;
        enemy.hp -= damage;
    }
    return enemy;
}

export const HandleDefense = ({enemy, gamestate} : { enemy : Enemy, gamestate : GameStateType}) => {
    const IsAttacked = Math.floor(Math.random() * 1); 
    let HP : number = Rules.maxHP;

    if (IsAttacked === 1) {
        let attack : number = enemy.damage;
        let elementDefense : number = Math.floor(enemy.damage*Rules.elementProtectionMultiplier);

        if (gamestate.selectedArmor.helmet.element === enemy.element)      attack -= elementDefense;
        if (gamestate.selectedArmor.breastplate.element === enemy.element) attack -= elementDefense;
        if (gamestate.selectedArmor.pants.element === enemy.element)       attack -= elementDefense;
        if (gamestate.selectedArmor.boots.element === enemy.element)       attack -= elementDefense;

        HP -= attack;
    }
    return HP;
}

export enum FightChoice {
    FastAttack = 0,
    StrongAttack = 1
}