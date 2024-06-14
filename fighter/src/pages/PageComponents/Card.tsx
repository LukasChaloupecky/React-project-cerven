import { useDrag } from 'react-dnd';
import { Armor } from '../../components/player/Armor';
import Styles from './Card.module.css'
import Image from './metal_helmet.jpeg'
import { ArmorData } from '../../data/ArmorData';
import ArmorCard from '../CardTypes/ArmorCard';
import { Weapon } from '../../components/player/Weapon';




export enum DnDType {
    ARMOR = "armor",
    WEAPON = "weapon"
}

const DragableCard = ({item, index} : {item : Armor | Weapon, index : number}) => {
    const logo = "/armors/metal_helmet.jpeg"
    // ! <img src={require("../../../public/armors/metal_helmet.jpeg")}/>
    const [{isDragging}, drag] = useDrag({
        type: "item",
        item: {index :index, type: DnDType.ARMOR},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    return (
        <div ref={drag}>
            {
                (item as Weapon)
                ?
                <ArmorCard armor={item as Weapon}/>
                :
                <ArmorCard armor={item as Armor}/>
            }
        </div>
    )
}
export default DragableCard;