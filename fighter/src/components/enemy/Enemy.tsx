type Enemy = {
    id : EnemyEnum,
    name : string,
    hp : number,
    score : number,
    damage : number,
    element : ElementEnum,
    level : number,
    // TODO : image : string
}

enum EnemyEnum {
    Goblin
}