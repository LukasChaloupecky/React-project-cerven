import { useContext, useState } from "react";
import { GameContext } from "../components/player/GameState";

const Board = () => { 
    const Reducer = useContext(GameContext);
    
    return (
        <>
           <h1>Board</h1> 
        </>
    );
}

export default Board;