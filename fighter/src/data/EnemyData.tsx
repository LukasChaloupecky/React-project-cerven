import { EnemyEnum } from "../components/enemy/Enemy";
import { ElementEnum } from "../components/player/Element";


// TODO : add images to the enemies
export const EnemyData = [
    {
        id : EnemyEnum.Goblin,
        name : "Goblin",
        hp : 100,
        score : 10,
        damage : 10,
        element : ElementEnum.NONE,
        level : 1,
        imgUrl : "./images/enemy/goblin.png"
    },
    {
        id : EnemyEnum.Goblin,
        name : "Goblin",
        hp : 100,
        score : 10,
        damage : 10,
        element : ElementEnum.NONE,
        level : 2,
        imgUrl : "./images/enemy/goblin.png"
    }
]