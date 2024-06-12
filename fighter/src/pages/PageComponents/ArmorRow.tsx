import { Armor } from "../../components/player/Armor";
import Card from "./Card";

const ArmorRow = ({armors} : {armors : Armor[]}) => {
    return (
        <>
        {
        armors.map((armor) => {
            return (
                <div>
                    <Card title={armor.name} imgUrl=""/>
                </div>
            )
        })
        }
        </>
    )
}

export default ArmorRow;