import { EnemyData } from "../../data/EnemyData";
import { Enemy } from "../enemy/Enemy";

export const HandleBoardGeneration = ({size, level} : {size : number, level:number}) => {
    let index : number;
    let row : Enemy[] = [];
    const Enemies : Enemy[] = EnemyData.filter((enemy) => enemy.level === level); 
    for (let i = 0; i < size; i++) {
       index = Math.floor(Math.random() * Enemies.length); 
       row.push(Enemies[index]);
    }
    return row;

}