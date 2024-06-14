import { Armor } from '../../components/player/Armor';
import { Weapon } from '../../components/player/Weapon';
import Styles from './ArmorCard.module.css';

const ArmorCard = ({armor} : {armor : Armor | Weapon}) => {
    // Implement the component logic here

    return (
        <div className={Styles["tooltip"]} >
            <div className={Styles["card"]} style={{backgroundImage: `url("${armor.ImgUrl}")`, }} >
            </div>
            <div className={Styles["tooltip__content"]}>
                <p>{armor.name}</p>
                {
                (armor as Weapon) 
                ?
                    <p>{(armor as Weapon).damage}</p> 
                : 
                    <p>{(armor as Armor).defense}</p>
                }
            </div>
        </div>
    );
};

export default ArmorCard;