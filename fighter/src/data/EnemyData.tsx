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
        imgUrl : "/enemies/images.jpeg"
    },
    {
        id : EnemyEnum.Goblin,
        name : "Goblin",
        hp : 100,
        score : 10,
        damage : 10,
        element : ElementEnum.Storm,
        level : 1,
        imgUrl : "/enemies/images.jpeg"
    },
    {
        id : EnemyEnum.Goblin,
        name : "Goblin",
        hp : 100,
        score : 10,
        damage : 10,
        element : ElementEnum.Fire,
        level : 1,
        imgUrl : "/enemies/images.jpeg"
    }
]