import React from 'react'
import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { addItemToCart } from '../features/features/cart/cartSlice';



export async function loader({params}) {
    const response = await fetch(`http://localhost:3000/products/${params.productId}`)
    const product = await response.json()
    return { product };
  }

function Product(props) {
    const {product} = useLoaderData()
    const dispatch = useDispatch()

  return (
    <main>
        <section className='product-section'>
        <img className='product-image' src={product.mainImage} alt="" />
        <div>
            <span>{product.brand}</span>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <span> &#8377;{product.price}</span>
            <button onClick={() =>{
              dispatch(addItemToCart(product))
            }}>Add to Cart</button>

        </div>
        </section>

    </main>
  )
}

export default Product
