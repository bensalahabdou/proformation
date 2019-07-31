import React from 'react'
import { Link } from 'react-router-dom'





 const Blog = ({articles}) => {
  return( 
    <div className="blogs">      
           <ul className="articles">
            {articles.map((el, i) => (
               <li key={i} className="menu-item">
                  <Link to={`/actualite/${el.id}`}><a className="article-item-link" href="#">
                {el.title}
                 </a></Link>

                <h4>{el.date}</h4>
                <p>{el.smallDescription}</p>
               </li>
    ))}
            </ul>
           
    </div>  
)
}
export default Blog