import Styles from './Card.module.css'

const Card = ({title, imgUrl} : {title : string, imgUrl : string}) => {
    return (
        <div className={Styles["card"]}>
            <img src="./metal_helmet.jpeg"/>
            <div className={Styles["container"]}>
                <h1>{title}</h1>
            </div>
        </div>
    )
}
export default Card;