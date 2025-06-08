import plusBtn from '../assets/icons/plus.svg'
import likeBtn from '../assets/icons/like.svg'
import './Product.css'
const images = import.meta.glob('../assets/data/products/**/*',
  
 )


function Product(props) {  
  const { title, price, image} = props
  let routImg = '../assets/data'

    console.log(routImg+image)
    return (
    <div className="product-wrapper">
      <div className="wrapper">
        <div className="image-container" >
          <button className='btn-secondary'> <img src={likeBtn} alt="Like Button" /> </button>
          <img src={routImg+image} alt="" />
        </div>
        <p>{title}</p>
        <div className="info-container">
          <div className="price">
            <h5>ЦЕНА:</h5> <strong>{price} тг</strong> </div>
          <button className='btn-secondary'> <img src={plusBtn} alt="Plus Button" /> </button>
        </div>
      </div>
    </div>
  )
}

export default Product