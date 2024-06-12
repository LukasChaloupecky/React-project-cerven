import { Armor } from "../../components/player/Armor";
import ArmorCard from "./Card";
import Styles from './ArmorRow.module.css'


const ArmorRow = ({armors} : {armors : Armor[]}) => {
    return (
        <div className={Styles["row"]}>
        {
        armors.map((armor) => {
            return (
                <div className={Styles["column"]}>
                    <ArmorCard armor={armor} imgUrl=""/>
                </div>
            )
        })
        }
        </div>
    )
}

export default ArmorRow;