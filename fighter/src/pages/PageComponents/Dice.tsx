import React, { useState } from 'react';
import Styles from './Dice.module.css'
import { Link } from 'react-router-dom';
import { Rules } from '../../components/player/GameState';

const Dice: React.FC = () => {
    const [Move, setMove] = useState(0);
    const ImgSourcer = [
        "/dice/1.png",
        "/dice/2.png",
        "/dice/3.png",
        "/dice/4.png",
        "/dice/5.png",
        "/dice/6.png"
    ];
    const RollDice = () => {
        const randomNumber = Math.floor(Math.random() * Rules.maxMove) + 1;
        setMove(randomNumber);
    }
    return (
        <div className={Styles["dice--container"]}>
            <Link to={"/inventory"}>Inventory</Link>
            <button onClick={() => RollDice()}>Roll</button>
            <div className={Styles["dice--result"]}>
                <img src={ImgSourcer[Move]}/> 
            </div>
        </div>
    );
};

export default Dice;