import React from 'react';
import Styles from './PlayField.module.css';
import { Enemy } from '../../components/enemy/Enemy';
import { ElementEnum } from '../../components/player/Element';




const PlayField = ({board} : {board : Enemy[]}) => {
    // Add your component  logic here

    return (
        <>
            <div className={Styles["row"]}>
                {
                    board.map((enemy) => {
                        return (
                            <div className={Styles["column"]}>
                                <Slot enemy={enemy}/>
                            </div>
                        )
                    })
                } 
            </div>
            {/* Add your component content here */}
        </>
    );
};



const Slot = ({enemy} : {enemy : Enemy}) => {
    const styleElement = {
        [ElementEnum.NONE]  : Styles["slot--none"],
        [ElementEnum.Fire]  : Styles["slot--fire"],
        [ElementEnum.Water] : Styles["slot--water"],
        [ElementEnum.Stone] : Styles["slot--stone"],
        [ElementEnum.Storm] : Styles["slot--storm"],

    }
    return (
        <>
            <div className={`${Styles["slot"]} ${styleElement[enemy.element]}`}>
               <p>slot</p> 
            </div> 
        </>
    )
}


export default PlayField;