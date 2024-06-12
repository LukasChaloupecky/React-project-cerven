import { useContext } from "react";
import { GameContext } from "../components/player/GameState";
import { ArmorType } from "../components/player/Armor";
import Card from "./PageComponents/Card";
import ArmorRow from "./PageComponents/ArmorRow";

const Inventory = () => {
    const state = useContext(GameContext).state;
    const dispatch = useContext(GameContext).dispatch;
    return (
        <>
        <ArmorRow armors={state.armorInventory.filter((armor) => armor.type === ArmorType.HELMET)}/>
        <ArmorRow armors={state.armorInventory.filter((armor) => armor.type === ArmorType.BREASTPLATE)}/>
        <ArmorRow armors={state.armorInventory.filter((armor) => armor.type === ArmorType.PANTS)}/>
        <ArmorRow armors={state.armorInventory.filter((armor) => armor.type === ArmorType.BOOTS)}/>

        {
            state.weaponInventory.map((weapon) => {
                return (
                    <div>
                        <Card title={weapon.name} imgUrl=""/>
                    </div>
                )
            })
        }
        </>
    )
}
export default Inventory;