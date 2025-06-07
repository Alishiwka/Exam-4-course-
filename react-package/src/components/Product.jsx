import plusBtn from '../assets/icons/plus.svg'
import likeBtn from '../assets/icons/like.svg'

import './Product.css'


function Product(props) {    
    return (
    <div className="product-wrapper">
      <div className="wrapper">
        <div className="image-container">
          <button className='btn-secondary'> <img src={likeBtn} alt="Like Button" /> </button>
        </div>
        <p>Название товара</p>
        <div className="info-container">
          <div className="price">
            <h5>ЦЕНА:</h5> <strong>1 100 тг</strong> </div>
          <button className='btn-secondary'> <img src={plusBtn} alt="Plus Button" /> </button>
        </div>
      </div>
    </div>
  )
}

export default Product