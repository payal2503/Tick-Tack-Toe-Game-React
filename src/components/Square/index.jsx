import { CIRCLE, CROSS } from '../../../constants';
import Circle from '../Circle';
import Cross from '../Cross';
import './index.css';

const Square = ({positions , value , handleMove}) => {

    const handleClick = () => {
        // if(value == EMPTY)
        handleMove(positions);
        
    }

    return (
        <div className='square' onClick={handleClick}>  
        
            {value == CIRCLE && <Circle />}
            {value == CROSS && <Cross />}
        </div>
    )
}

export default Square;