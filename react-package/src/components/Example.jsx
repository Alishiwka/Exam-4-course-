import { useState } from 'react';
import '../App.css'


function Product(props) {
    const {title, channelName, img} = props;
    const [likesCount, setLikesCount] = useState(0)
    const increaseLikesByOne = () => {
        setLikesCount(likesCount + 1)
    }

    
    return (
        <div className='product'>
            
            <img className='product-img' src={img} alt="image" />
            <p>{title}</p>
            <p>{channelName}</p>

            <div className='product-footer'>
              <p>Лайки: {likesCount}</p>
              <button onClick={increaseLikesByOne}>Лайк</button>
            </div>

          </div>
    )
}

export default Product