import { useDrag } from 'react-dnd';
import { Armor } from '../../components/player/Armor';
import Styles from './Card.module.css'
import Image from './metal_helmet.jpeg'
import { ArmorData } from '../../data/ArmorData';




export enum DnDType {
    ARMOR = "armor",
    WEAPON = "weapon"
}

const ArmorCard = ({armor , index, isDragable} : {armor : Armor, index : number, isDragable : boolean}) => {
    const logo = "/armors/metal_helmet.jpeg"
    console.log(armor.ImgUrl) 
    // ! <img src={require("../../../public/armors/metal_helmet.jpeg")}/>
    const [{isDragging}, drag] = useDrag({
        type: "item",
        item: {index :index, type: DnDType.ARMOR},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    return (
        <div ref={(isDragable)?drag:null} className={Styles["card"]}>
            <img className={Styles["card__image"]} src={armor.ImgUrl}/>
        </div>
    )
}
export default ArmorCard;