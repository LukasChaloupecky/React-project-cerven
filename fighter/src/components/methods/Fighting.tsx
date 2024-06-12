import { Enemy } from "../enemy/Enemy";
import { GameStateType, Rules } from "../player/GameState";

const FightHandler = ({enemy, gamestate, choice} : { enemy : Enemy, gamestate : GameStateType, choice : FightChoice}) => {
    const correct = Math.floor(Math.random() * 1); 
    if (correct === choice.valueOf()) {
        let damage = (choice === FightChoice.FastAttack) ? (gamestate.selectedWeapon.damage * Rules.matchingElementMultiplier)  : gamestate.selectedWeapon.damage;
        enemy.hp -= damage;
    }
    return enemy;
}

export enum FightChoice {
    FastAttack = 0,
    StrongAttack = 1
}