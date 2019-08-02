import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import { data } from './helper'


 class InfoPageDetails extends Component {
    renderCenterBySecteur = () => {
       const { match:{params:{domaine,secteur,id}}}=this.props
       if (!domaine || !secteur) return []
console.log(domaine,secteur,id)
        let center = []
        const sec = data.domain.find(d => d.name === domaine)
if(secteur){
    center=sec && sec.secteur && sec.secteur.find(d => d.name === secteur.value)
    if(sec && sec.secteur && sec.secteur.length>0){
    center=sec.secteur.find(d => d.name === secteur)

    if(center && center.name){
        center=center.centre.filter(d=>d.id===parseInt(id))
    }}
}

        return center
    }
  render() {
    return (
        <div className="countries-city">
        {this.renderCenterBySecteur().length>0 && this.renderCenterBySecteur().map((el, i) => (
          <div key={i}>
            <div className="town">
              <div className="image">
                <img src={el.imgUrl} />
              </div>
              <h3>{el.name}</h3>
              <link to="/" />
              
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default withRouter(InfoPageDetails)