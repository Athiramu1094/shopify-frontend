
//for having a single category page.whne the top wear or bottom wear is clicked that is the single category page.



import React from 'react'

import { useLoaderData } from 'react-router-dom';
import ProductCard from '../components/productCard';

export async function loader({params}) {
    const response = await fetch(`http://localhost:3000/categories/${params.categoryId}`);
    const category = await response.json()

    const productResponse = await fetch(`http://localhost:3000/products?category=${params.categoryId}`)//filter the products with category id
    const products = await productResponse.json()
    return { category,products };
  }
  function Category()  {
    const {category,products} = useLoaderData()
    //console.log(category)
    //console.log(products)
  return (
    <main>
       <section>
     <article>
     <h1 className='category-name'>{category.categoryName}</h1>
     <div className='product-list'>
        {
        products.map(product => {
            return(
                <ProductCard key={product._id} product = {product} />
            )
        })
    }
       </div>
     
      <span></span>
     </article>
       </section>
    </main>
  )
}

export default Category