import { useContext, useState } from "react";
import { ActionEnum, GameContext } from "../components/player/GameState";

const Board = () => { 
    const Reducer = useContext(GameContext);
    const [Enemy, setEnemy] = useState(Reducer?.state.Board[Reducer?.state.currentSpot]);
    return (
        <>
            { // TODO : HERE WILL BE the SPOTS etc.
            }
            {
            Reducer?.state.isFight 
            ?
                <h1>fight</h1>
            :
                <h1>move</h1>
            }
        </>
    );
}

export default Board;