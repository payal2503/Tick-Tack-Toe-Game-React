import { CIRCLE, CROSS } from '../../../constants';
import Circle from '../Circle';
import Cross from '../Cross';
import { EMPTY } from '../../../constants';
import './index.css';

const Square = ({position1 , value , handleMove}) => {

    const handleClick = () => {
        if (value == EMPTY) handleMove(position1);   
        console.log(handleClick);  
    }

    return (
        <div className='square' onClick={handleClick}>       
            {value == CIRCLE && <Circle />}
            {value == CROSS && <Cross />}
        </div>
    )
}

export default Square;