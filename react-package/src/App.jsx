import Product from './components/Product'
import plusBtn from './assets/icons/plus.svg'
import likeBtn from './assets/icons/like.svg'
import img from './assets/data/products/electronic/1.jpg'

import './App.css'

function App() {
  return (
    <>  
      <div className='container'>
        <div className="items-conatiner">
          <Product 
            title="Наушники"
            price={15000}
            image={img}
          />
        </div>
      </div>
    </>
  )
}

export default App;
