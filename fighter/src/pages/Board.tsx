import { useContext, useState } from "react";
import { ActionEnum, GameContext, Rules } from "../components/player/GameState";
import { FightChoice, FightHandler } from "../components/methods/Fighting";

const Board = () => { 
    const Reducer = useContext(GameContext);
    if (Reducer === undefined) throw new Error("useContext must be inside a Provider with a value");

    const [Enemy, setEnemy] = useState(Reducer?.state.Board[Reducer?.state.currentSpot]);
    const [PlayerTurn, setPlayerTurn] = useState(true);

    const HandleAttack = (choice : FightChoice) => {
        const damage = FightHandler({gamestate: Reducer?.state, choice: choice});
        setEnemy({...Enemy, hp: Enemy.hp - damage});

        console.log("Enemy HP: " + Enemy.hp);
    }
    const HandleDefense = () => {
    }
    const HandeMove = () => {
        const move = Math.floor(Math.random() * Rules.maxMove);
        Reducer?.dispatch({type: ActionEnum.CHANGE_SPOT, SPOT_DIFFERENCE: move});
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
                    <button onClick={HandleDefense}>Defense</button>
                }
                </>
                
            :
                <div>
                <h1>move</h1>
                    <button onClick={() => HandeMove}>Move</button>
                </div>
            }
        </>
    );
}

export default Board;