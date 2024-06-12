import { useContext, useEffect, useState } from "react";
import { ActionEnum, GameContext, Rules } from "../components/player/GameState";
import { DefenseHandler, FightChoice, FightHandler } from "../components/methods/Fighting";
import { ArmorData } from "../data/ArmorData";
import { Armor } from "../components/player/Armor";
import { Weapon } from "../components/player/Weapon";
import { WeaponData } from "../data/WeaponData";

const Board = () => { 
    const Reducer = useContext(GameContext);
    if (Reducer === undefined) throw new Error("useContext must be inside a Provider with a value");

    const [Enemy, setEnemy] = useState(Reducer?.state.Board[Reducer?.state.currentSpot]);
    const [PlayerHP, setPlayerHP] = useState(Rules.maxHP); // TODO : Change this to the player's HP
    const [PlayerTurn, setPlayerTurn] = useState(true);

    const HandleAttack = (choice : FightChoice) => {
        const damage = FightHandler({gamestate: Reducer?.state, choice: choice, enemy : Enemy});
        setEnemy({...Enemy, hp: Enemy.hp - damage});

        console.log("Enemy HP: " + Enemy.hp);
        console.log("Enemy HP: " + Enemy.hp);

        if (Enemy.hp <= 0) HandeWin();
        else setPlayerTurn(false);
    }
    const HandeWin = () => {
        console.log("Win");
        Reducer?.dispatch({type: ActionEnum.CHANGE_SCORE, SCORE_DIFFERENCE: Enemy.score});
        Reducer?.dispatch({type: ActionEnum.IS_FIGHT, IS_FIGHT: false});

        if (Math.floor(Math.random() * 1) === 1) {
            let armors : Armor[] = ArmorData.filter((armor) => armor.level == Reducer?.state.currentLevel);
            let index : number = Math.floor(Math.random() * armors.length-1);

            // TODO : select armor from armors on random by the level
            Reducer.dispatch({type: ActionEnum.ADD_ARMOR, ARMOR: armors[index]});
        }
        else {
            let weapons : Weapon[] = WeaponData.filter((weapon) => weapon.level == Reducer?.state.currentLevel); 
            let index : number = Math.floor(Math.random() * weapons.length-1);
            // TODO : select one weapon based on the level that the user currently has

            Reducer.dispatch({type: ActionEnum.ADD_WEAPON, WEAPON: weapons[index]});
        }
        Reducer.dispatch({type : ActionEnum.IS_FIGHT, IS_FIGHT: false})
        setPlayerHP(Rules.maxHP);
    }

    const HandleDefense = () => {
        setPlayerHP(PlayerHP - DefenseHandler({enemy: Enemy, gamestate: Reducer?.state}));
        console.log("Player HP: " + PlayerHP);
        console.log("Enemy HP: " + Enemy.hp);

        setPlayerTurn(true);
    }
    const HandleMove = () => {
        const move = Math.floor(Math.random() * Rules.maxMove);
        Reducer?.dispatch({type: ActionEnum.CHANGE_SPOT, SPOT_DIFFERENCE: move});

        setEnemy(Reducer?.state.Board[Reducer?.state.currentSpot]);

        Reducer?.dispatch({type: ActionEnum.IS_FIGHT, IS_FIGHT: true});
        setPlayerTurn(true);
    }

    return (
        <>
            { // TODO : HERE WILL BE the SPOTS etc.
            }
            {
            Reducer?.state.isFight 
            ?
                <>
                <h1>fight</h1>
                {
                    PlayerTurn
                    ?
                    <div>
                        <button onClick={() => HandleAttack(FightChoice.FastAttack)}>FastAttack</button>     
                        <button onClick={() => HandleAttack(FightChoice.StrongAttack)}>StrongAttack</button>     
                        
                    </div>           
                    :
                    <button onClick={() => HandleDefense()}>Defense</button>
                }
                </>
                
            :
                <div>
                <h1>move</h1>
                    <button onClick={() => HandleMove()}>Move</button>
                </div>
            }
            <div>
                <h1>Player : {PlayerHP}</h1>
                <h1>Enemy : {Enemy.hp}</h1>
            </div>
        </>
    );
}

export default Board;