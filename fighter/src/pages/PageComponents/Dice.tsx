import React, { useContext, useEffect, useState } from 'react';
import Styles from './Dice.module.css'
import { Link } from 'react-router-dom';
import { ActionEnum, GameContext, Rules } from '../../components/player/GameState';
import { Enemy } from '../../components/enemy/Enemy';

const Dice= ({setPlayerTurn, setEnemy} : {setPlayerTurn : React.Dispatch<React.SetStateAction<boolean>>, setEnemy : React.Dispatch<React.SetStateAction<Enemy>>}) => {
    const [Move, setMove] = useState<number>(0);
    const dispatch = useContext(GameContext).dispatch;
    const state = useContext(GameContext).state;
    const [Throws, setThrows] = useState<number>(0);
    const ImgSourcer = [
        "/dice/1.png",
        "/dice/2.png",
        "/dice/3.png",
        "/dice/4.png",
        "/dice/5.png",
        "/dice/6.png"
    ];
    useEffect(() => {},[Move, Throws])
    const RollDice = () => {
        const randomNumber = Math.floor(Math.random() * Rules.maxMove) + 1;
        setMove(randomNumber);
        setThrows(Throws + 1);
    }
    const HandleMove = () => {
         dispatch({type: ActionEnum.CHANGE_SPOT, SPOT_DIFFERENCE: Move});

         setEnemy(state.Board[state.currentSpot]);

         dispatch({type: ActionEnum.IS_FIGHT, IS_FIGHT: true});
         setPlayerTurn(true);
    }
    return (
        <div className={Styles["dice--container"]}>
            <Link to={"/inventory"}>Inventory</Link>
            {
                (Rules.throwLimit > Throws) ? <button onClick={() => RollDice()}>Roll (left {Rules.throwLimit - Throws})</button> : null
            }
            <div className={Styles["dice--result"]}>
                <img src={ImgSourcer[Move]}/> 
            </div>
            {
                (Move !== 0 ) ? <button onClick={() => HandleMove()}>Move: {Move} steps</button> : null
            }
        </div>
    );
};

export default Dice;