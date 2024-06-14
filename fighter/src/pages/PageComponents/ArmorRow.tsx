import { Armor } from "../../components/player/Armor";
import ArmorCard, { DnDType } from "./Card";
import Styles from './ArmorRow.module.css'
import WeaponCard from "./WeaponCard";
import { Weapon } from "../../components/player/Weapon";
import { useDrag } from "react-dnd";
import DragableCard from "./Card";


const ArmorRow = ({items} : {items : Armor[] | Weapon[]}) => {
   
    return (
        <div className={Styles["row"]}>
        {
        items.map((item, index) => {
            if (item as Armor) {
            return (
                <div className={Styles["column"]}>
                    <DragableCard item={item as Armor} index={index}/>
                </div>
            )}
            else if (item as Weapon) {
            return (
                <div className={Styles["column"]}>
                    <DragableCard item={item as Weapon} index={index}/>
                </div>
            )}
        })
        }
        </div>
    )
}

export default ArmorRow;