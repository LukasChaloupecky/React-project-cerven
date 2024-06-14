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

const DragableCard = ({item, index, isDragable, type} : {item : Armor | Weapon, index : number, isDragable : boolean, type : DnDType}) => {
    const logo = "/armors/metal_helmet.jpeg"
    // ! <img src={require("../../../public/armors/metal_helmet.jpeg")}/>
    const [{isDragging}, drag] = useDrag({
        type: "item",
        item: {index :index, type: type},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    return (
        <>
        {isDragable
            ?
            <div ref={drag} >
            {
            (item as Weapon)
                ?
                <ArmorCard armor={item as Weapon}/>
                :
                <ArmorCard armor={item as Armor}/>
            }
            {
                (item as Weapon)
                ?
                <ArmorCard armor={item as Weapon}/>
                :
                <ArmorCard armor={item as Armor}/>
            }
            </div>
            :
            <div >
            {
            (item as Weapon)
                ?
                <ArmorCard armor={item as Weapon}/>
                :
                <ArmorCard armor={item as Armor}/>
            }
            {
                (item as Weapon)
                ?
                <ArmorCard armor={item as Weapon}/>
                :
                <ArmorCard armor={item as Armor}/>
            }
            </div>
        }
        </>
    )
}
export default DragableCard;