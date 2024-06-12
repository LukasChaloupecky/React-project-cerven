import React from 'react';
import Styles from './PlayField.module.css';
import { Enemy } from '../../components/enemy/Enemy';
import { ElementEnum } from '../../components/player/Element';




const PlayField = ({board, currentSpot} : {board : Enemy[], currentSpot : number}) => {
    // Add your component  logic here

    return (
        <>
            <div className={Styles["row"]}>
                {
                    board.map((enemy, index) => {
                        return (
                            <div className={Styles["column"]} key={index}>
                                <Slot enemy={enemy} showPlayer={(index === currentSpot) ? true : false}/>
                            </div>
                        )
                    })
                } 
            </div>
            {/* Add your component content here */}
        </>
    );
};



const Slot = ({enemy, showPlayer} : {enemy : Enemy, showPlayer : boolean }) => {
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
               <p>{(showPlayer ? "some" : "")}</p> 
            </div> 
        </>
    )
}


export default PlayField;