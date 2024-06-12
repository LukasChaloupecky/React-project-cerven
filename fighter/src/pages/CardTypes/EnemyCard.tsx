import React from 'react';
import { Enemy } from '../../components/enemy/Enemy';
import Styles from './EnemyCard.module.css';


const EnemyCard = ({enemy} : {enemy : Enemy}) => {
    /* 
    <div class="card" style="width:400px">
    <img class="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div>

  */
    return (
        <div className={Styles["card"]}>
            <div className={Styles["card__body"]}>
                <h2>{enemy.name}</h2>
                <p>MaxHP: {enemy.hp}</p>
                <p>Attack: {enemy.damage}</p>
                <p>Element: {enemy.element}</p>
            </div>
        </div>
    );
};

export default EnemyCard;