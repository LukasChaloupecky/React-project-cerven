import { useContext, useState } from "react";
import { GameContext } from "../components/player/GameState";

const Board = () => { 
    const Reducer = useContext(GameContext);
    
    return (
        <>

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