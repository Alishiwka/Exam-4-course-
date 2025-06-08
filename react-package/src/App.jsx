import Product from './components/Product'
import plusBtn from './assets/icons/plus.svg'
import likeBtn from './assets/icons/like.svg'

import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const BASE_URL = 'http://localhost:4000/api'

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      const res = await fetch(BASE_URL + '/products/get-products')
      const data = await res.json()
      setProducts(data)
    }
    getProducts()
  }, [])
    

  return (
    <>  
      <div className='container'>
        <div className="items-conatiner">
          {products.map(p => (
            <Product
            key = {p.id}
            title = {p.title}
            price = {p.price}
            image = {BASE_URL + p.image}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
