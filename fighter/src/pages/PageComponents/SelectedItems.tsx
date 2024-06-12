import { GameStateType } from "../../components/player/GameState";
import Card from "./Card";

const SelectedItems = ({state} : {state : GameStateType}) => {
    return (
        <>
            <Card title={state.selectedArmor.breastplate.name} imgUrl={state.selectedArmor.breastplate.ImgUrl}/>
        </>   
    )
}
export default SelectedItems;