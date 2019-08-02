// import React from 'react'

// export default function Article (props) {
//   return (
//     <div>
//       {props.articles
//         .filter(el => el.id === props.match.params.id)
//         .map(el => (
//           <div>
//             <h2> {el.title}</h2>
//             <h4>{el.date}</h4>
//             <p>{el.smallDescription}</p>
//           </div>
//         ))}
//     </div>
//   )
// }


import React from 'react'
import Header from './header'
import FooterPage from './footer'
export default function Article (props) {
 return (
   <div>
     {props.articles
       .filter(el => el.id === props.match.params.id)
       .map(el => (
         <div className='article'>
           <Header/>
           <div className="blogo">
           <h2> {el.title}</h2>
           <h4>{el.date}</h4>
           <p>{el.smallDescription}</p>
           <div className="imgblog">
           <img src={el.Img} />
           </div>
           <FooterPage/>
           </div>
         </div>
       ))}
   </div>
 )
}