import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

export async function loader() {
    const response = await fetch('http://localhost:3000/categories')
    const categories =await response.json()
    return { categories };
  }


  function Categories() {
    const {categories} = useLoaderData()
    
  return (
    
      <main>
        <section className='category-section'>
            <h1>Categories</h1>
            
             <div className='categoryCard'>
             {
                categories.map(category =>{
                    return(
                        <article className='category-article' key={category._id}>
                        <Link to={`/categories/${category._id}`}>
                        <img src={category.image} alt={category.categoryname}/>
                        </Link>
                        <Link to={`/categories/${category._id}`} className='category-link'>{category.categoryName}</Link>
                        </article>
                        
                    )
                })
              }
             </div>
            
        </section>
      </main>
    
  )
}

export default Categories
