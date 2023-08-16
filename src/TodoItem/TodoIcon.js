import {ReactComponent as TickSVG} from './tick.svg';
import {ReactComponent as DeleteSVG} from './delete.svg';
import './TodoIcon.css'

const iconTypes = {
    "tick": (color) => <TickSVG className='icon-svg' fill={color}/>,
    "delete": (color) => <DeleteSVG className='icon-svg' fill={color}/>,
}

function TodoIcon ({type, color, onClick}){

    return (
        <span onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    )
}

export {TodoIcon};