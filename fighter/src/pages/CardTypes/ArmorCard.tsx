import { Armor } from '../../components/player/Armor';
import Styles from './ArmorCard.module.css';

const ArmorCard = ({armor} : {armor : Armor}) => {
    // Implement the component logic here

    return (
        <div className={Styles["card"]} style={{backgroundImage: `url("${armor.ImgUrl}")`, }} >
            <p>D: {armor.defense}</p>
            <p>D: {armor.element}</p>
            <p>D: {armor.level}</p>
            <p>D: {armor.cost}</p>
        </div>
    );
};

export default ArmorCard;