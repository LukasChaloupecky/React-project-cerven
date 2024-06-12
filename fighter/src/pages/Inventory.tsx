import { useContext } from "react";
import { GameContext } from "../components/player/GameState";
import { ArmorType } from "../components/player/Armor";
import Card from "./PageComponents/Card";
import ArmorRow from "./PageComponents/ArmorRow";
import { Link } from "react-router-dom";

const Inventory = () => {
    const state = useContext(GameContext).state;
    const dispatch = useContext(GameContext).dispatch;
    return (
        <>
        <ArmorRow armors={state.armorInventory.filter((armor) => armor.type === ArmorType.HELMET)}/>
        <ArmorRow armors={state.armorInventory.filter((armor) => armor.type === ArmorType.BREASTPLATE)}/>
        <ArmorRow armors={state.armorInventory.filter((armor) => armor.type === ArmorType.PANTS)}/>
        <ArmorRow armors={state.armorInventory.filter((armor) => armor.type === ArmorType.BOOTS)}/>

        
        < Link to={"/Board"}>Back</Link>
        </>
    )
}
export default Inventory;