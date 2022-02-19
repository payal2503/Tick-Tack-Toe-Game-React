import { CIRCLE, CROSS } from '../../../constants';
import Circle from '../Circle';
import Cross from '../Cross';
import './index.css';

const Square = ({positions , value}) => {
    return (
        <div className='square'>  
            {value == CIRCLE && <Circle />}
            {value == CROSS && <Cross />}
        </div>
    )
}

export default Square;