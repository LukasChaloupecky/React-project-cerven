import { useContext } from "react";
import { ActionEnum, GameContext } from "../components/player/GameState";
import { Armor, ArmorType } from "../components/player/Armor";
import Card, { DnDType } from "./PageComponents/Card";
import { Link } from "react-router-dom";
import { DndProvider, useDrop } from "react-dnd";

import Styles from './Inventory.module.css'
import WeaponCard from "./PageComponents/WeaponCard";
import ArmorRow from "./PageComponents/ArmorRow";


const Inventory = () => {
    const state = useContext(GameContext).state;
    const dispatch = useContext(GameContext).dispatch;
    
    const [{isOver}, drop] = useDrop({
        accept: "armor",
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
    return (
        <div className={Styles["inventory__table"]}>
            <div className={Styles["inventory__row"]}>
                <Card armor={state.selectedArmor.helmet} imgUrl={state.selectedArmor.helmet.ImgUrl} index={0}/>
                <ArmorRow items={state.armorInventory.filter((armor) => armor.type === ArmorType.HELMET)}/>
            </div>
            <div className={Styles["inventory__row"]}>
                <Card armor={state.selectedArmor.breastplate} imgUrl={state.selectedArmor.breastplate.ImgUrl} index={1}/>
                <ArmorRow items={state.armorInventory.filter((armor) => armor.type === ArmorType.BREASTPLATE)}/>
            </div>
            <div className={Styles["inventory__row"]}>
                <Card armor={state.selectedArmor.pants} imgUrl={state.selectedArmor.pants.ImgUrl} index={2}/>
                <ArmorRow items={state.armorInventory.filter((armor) => armor.type === ArmorType.PANTS)}/>
            </div>
            <div className={Styles["inventory__row"]}>
                <Card armor={state.selectedArmor.boots} imgUrl={state.selectedArmor.boots.ImgUrl} index={3}/>
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
    )
}
export default Inventory;