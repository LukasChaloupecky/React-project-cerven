import React from 'react';
import { Weapon } from '../../components/player/Weapon';
import { useDrag } from 'react-dnd';
import Styles from './Card.module.css'
import { DnDType } from './Card';

const WeaponCard = ({weapon, imgUrl, index} : {weapon : Weapon, imgUrl : string, index : number}) => {
    const logo = "/armors/metal_helmet.jpeg"
    console.log(weapon.ImgUrl) 
    // ! <img src={require("../../../public/armors/metal_helmet.jpeg")}/>
    const [{isDragging}, drag] = useDrag({
        type: "item",
        item: {index :index, type: DnDType.WEAPON},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    return (
        <div ref={drag} className={Styles["card"]}>
            <img className={Styles["card__image"]} src={weapon.ImgUrl}/>
            <div className={Styles["container"]}>
                <h4>{weapon.name}</h4>
                <p>{weapon.damage}</p>
                <p>{weapon.element}</p>
                <p>{weapon.cost}</p>
            </div>
        </div>
    )
}

export default WeaponCard;