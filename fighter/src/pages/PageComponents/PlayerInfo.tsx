import { GameStateType } from '../../components/player/GameState'
import ArmorCard from '../CardTypes/ArmorCard'

import Styles from './PlayerInfo.module.css'

export const PlayerInfo= ({state} : {state : GameStateType}) => {
    return (
        <div className={Styles["status"]}>
            <div className={Styles["status__element"]}>
                <ArmorCard armor={state.selectedArmor.helmet}/>
                <ArmorCard armor={state.selectedArmor.breastplate}/>
                <ArmorCard armor={state.selectedArmor.pants}/>
                <ArmorCard armor={state.selectedArmor.boots}/>
            </div>
            <div className={Styles["status__element"]}>
                <div className={Styles["status--vertical"]}> 
                    <div className={Styles["status__element"]}>
                        <p>Score: {state.score}</p>    
                        <p>Level: {state.currentLevel}</p>    
                        <p>Weapon : {state.selectedWeapon.element.toString()} - {state.selectedWeapon.damage}</p>    
                    </div>
                    <div className={Styles["status__element"]}>
                        <p>Healt</p>
                    </div>
                </div>
            </div>
        </div>
    )
}