import { useContext } from "react";
import { ActionEnum, GameContext } from "../components/player/GameState";
import { Armor, ArmorType } from "../components/player/Armor";
import Card from "./PageComponents/Card";
import ArmorRow from "./PageComponents/ArmorRow";
import { Link } from "react-router-dom";
import { DndProvider, useDrop } from "react-dnd";

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
    return (
        <>
        <ArmorRow armors={state.armorInventory.filter((armor) => armor.type === ArmorType.HELMET)}/>
        <ArmorRow armors={state.armorInventory.filter((armor) => armor.type === ArmorType.BREASTPLATE)}/>
        <ArmorRow armors={state.armorInventory.filter((armor) => armor.type === ArmorType.PANTS)}/>
        <ArmorRow armors={state.armorInventory.filter((armor) => armor.type === ArmorType.BOOTS)}/>

        // TODO : make field with selected armor that can be used as DROP field that higher in the code on line 17
        <div ref={drop} style={{backgroundColor: isOver ? "green" : "yellow", width: "100px", height: "100px"}}>hsdfhfsdfhjsdfhjhjfhjsdfhjfhjaff</div>

        < Link to={"/Board"}>Back</Link>
        </>
    )
}
export default Inventory;