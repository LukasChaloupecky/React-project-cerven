import { Armor } from '../../components/player/Armor';
import Styles from './Card.module.css'
import Image from './metal_helmet.jpeg'

const ArmorCard = ({armor, imgUrl} : {armor : Armor, imgUrl : string}) => {
    return (
        <div className={Styles["card"]}>
            <img className={Styles["card__image"]} src={Image}/>
            <div className={Styles["container"]}>
                <h4>{armor.name}</h4>
                <p>{armor.defense}</p>
                <p>{armor.element}</p>
                <p>{armor.cost}</p>
            </div>
        </div>
    )
}
export default ArmorCard;