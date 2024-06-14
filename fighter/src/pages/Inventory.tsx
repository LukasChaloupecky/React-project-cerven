import { useContext } from "react";
import { ActionEnum, GameContext } from "../components/player/GameState";
import { Armor, ArmorType } from "../components/player/Armor";
import Card, { DnDType } from "./PageComponents/Card";
import { Link } from "react-router-dom";
import { DndProvider, useDrag, useDrop } from "react-dnd";

import Styles from './Inventory.module.css'
import WeaponCard from "./PageComponents/WeaponCard";
import ArmorRow from "./PageComponents/ArmorRow";
import ArmorCard from "./CardTypes/ArmorCard";


const Inventory = () => {
    const state = useContext(GameContext).state;
    const dispatch = useContext(GameContext).dispatch;
    
    const [{isOver}, drop] = useDrop({
        accept: DnDType.ARMOR,
        drop: (item : {index : number}) => {
            console.log(item.index);
            dispatch({type: ActionEnum.CHANGE_ARMOR, ARMOR_INDEX: item.index});
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });
    const [{isOverSold}, dropSold] = useDrop({
        accept: "item",
        drop: (item : {index : number, type : DnDType}) => {
            console.log(item.index);
            if (item.type === DnDType.WEAPON) dispatch({type: ActionEnum.REMOVE_WEAPON, WEAPON_INDEX: item.index});
            if (item.type === DnDType.ARMOR) dispatch({type: ActionEnum.REMOVE_ARMOR, ARMOR_INDEX: item.index});

        },
        collect: (monitor) => ({
            isOverSold: !!monitor.isOver()
        })
    });
    /*
<div className={Styles["inventory__table"]}>
            <div className={Styles["inventory__row"]}>
                <ArmorCard armor={state.selectedArmor.helmet} />
                <ArmorRow items={state.armorInventory.filter((armor) => armor.type === ArmorType.HELMET)}/>
            </div>
            <div className={Styles["inventory__row"]}>
                <ArmorCard armor={state.selectedArmor.breastplate} />
                <ArmorRow items={state.armorInventory.filter((armor) => armor.type === ArmorType.BREASTPLATE)}/>
            </div>
            <div className={Styles["inventory__row"]}>
                <ArmorCard armor={state.selectedArmor.pants} />
                <ArmorRow items={state.armorInventory.filter((armor) => armor.type === ArmorType.PANTS)}/>
            </div>
            <div className={Styles["inventory__row"]}>
                <ArmorCard armor={state.selectedArmor.boots} />
                <ArmorRow items={state.armorInventory.filter((armor) => armor.type === ArmorType.BOOTS)}/>
            </div>
            <div className={Styles["inventory__row"]}>
                <WeaponCard weapon={state.selectedWeapon} imgUrl={state.selectedWeapon.ImgUrl } index={4}/>
                <ArmorRow items={state.armorInventory.filter((armor) => armor.type === ArmorType.BOOTS)}/>
            </div>

            // TODO : make field with selected armor that can be used as DROP field that higher in the code on line 17
            <div ref={drop} style={{backgroundColor: isOver ? "green" : "yellow", width: "100px", height: "100px"}}>hsdfhfsdfhjsdfhjhjfhjsdfhjfhjaff</div>

            <div ref={dropSold} style={{backgroundColor: isOverSold ? "green" : "yellow", width: "100px", height: "100px"}}>sold</div>
            < Link to={"/Board"}>Back</Link>


            
        </div>
    */

    
    return (
        <>
            <div className={Styles['inventory']}>
                <div className={Styles['inventory__row']}>
                    <div ref={drop} className={Styles['inventory__selected']}>
                        <ArmorCard armor={state.selectedArmor.helmet} />
                    </div>
                    <div className={Styles['Inventory__unselected']}>
                        <ArmorRow items={state.armorInventory.filter((armor) => armor.type === ArmorType.HELMET)}/>
                    </div>
                </div>
                <div  className={Styles['inventory__row']}>
                    <div ref={drop} className={Styles['inventory__selected']}>
                        <ArmorCard armor={state.selectedArmor.helmet} />
                    </div>
                    <div className={Styles['Inventory__unselected']}>
                        <ArmorRow items={state.armorInventory.filter((armor) => armor.type === ArmorType.BREASTPLATE)}/>
                    </div>
                </div>
                <div className={Styles['inventory__row']}>
                    <div ref={drop} className={Styles['inventory__selected']}>
                        <ArmorCard armor={state.selectedArmor.helmet} />
                    </div>
                    <div className={Styles['Inventory__unselected']}>
                        <ArmorRow items={state.armorInventory.filter((armor) => armor.type === ArmorType.PANTS)}/>
                    </div>
                </div> 
                <div className={Styles['inventory__row']}>
                    <div ref={drop} className={Styles['inventory__selected']}>
                        <ArmorCard armor={state.selectedArmor.helmet} />
                    </div>
                    <div className={Styles['Inventory__unselected']}>
                        <ArmorRow items={state.armorInventory.filter((armor) => armor.type === ArmorType.BOOTS)}/>
                    </div>
                </div>  
                <div className={Styles['inventory__row']}>
                    <div className={Styles['inventory__selected']}>
                        <ArmorCard armor={state.selectedWeapon} />
                    </div>
                    <div className={Styles['Inventory__unselected']}>
                        <ArmorRow items={state.weaponInventory}/>
                    </div>
                </div> 
                <div ref={dropSold} style={{backgroundColor: isOverSold ? "green" : "yellow", width: "100px", height: "100px"}}>sold</div>
                <Link to={"/Board"}>Back</Link>
            </div>
        </> 
    )
}
export default Inventory;