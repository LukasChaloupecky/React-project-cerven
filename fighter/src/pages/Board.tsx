import { useContext, useState } from "react";
import { ActionEnum, GameContext } from "../components/player/GameState";

const Board = () => { 
    const Reducer = useContext(GameContext);
    
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