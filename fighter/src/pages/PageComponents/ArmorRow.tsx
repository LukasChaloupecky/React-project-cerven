import { Armor } from "../../components/player/Armor";
import ArmorCard from "./Card";
import Styles from './ArmorRow.module.css'
import WeaponCard from "./WeaponCard";
import { Weapon } from "../../components/player/Weapon";


const ArmorRow = ({items} : {items : Armor[] | Weapon[]}) => {
    return (
        <div className={Styles["row"]}>
        {
        items.map((item, index) => {
            if (item as Armor) {
            return (
                <div className={Styles["column"]}>
                    <ArmorCard armor={item as Armor} isDragable={true} index={index}/>
                </div>
            )}
            else if (item as Weapon) {
            return (
                <div className={Styles["column"]}>
                    <WeaponCard weapon={item as Weapon} imgUrl={item.ImgUrl} index={index}/>
                </div>
            )}
        })
        }
        </div>
    )
}

export default ArmorRow;