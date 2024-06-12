import { render } from "react-dom";

const Card = ({title, imgUrl} : {title : string, imgUrl : string}) => {
    return (
        <div>
            
            <h1>{title}</h1>
        </div>
    )
}
export default Card;