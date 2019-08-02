// import React, { Component } from 'react'

// import Header from './header'
// import Blog from './blog'

// export default class Actualite extends Component {
//   render () {
//     const { articles } = this.props
//     return (
//       <div>
//         <div><Header /></div>
//         <div className="blogs"><Blog articles={articles} /></div>
//       </div>
//     )
//   }
// }


import React, { Component } from 'react'
import Header from './header'
import Blog from './blog'
export default class Actualite extends Component {
 render () {
   const { articles } = this.props
   return (
     <div >
       <Header />
       <div className='actualite'>
       <Blog articles={articles} />
       </div>
     </div>
   )
 }
}