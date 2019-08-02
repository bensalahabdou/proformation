import React, { Component } from 'react'
import Select from 'react-select'
import INFOPAGE from './INFOPAGE'
import { data } from './helper'

class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            domaine: null,
            secteur: null,
            centerList:[]
        }
    }
    renderDomaine = () => {
        console.log(data, 'data')
        const domaine = data.domain.map(elem => {
            return { label: elem.name, value: elem.name }
        })
        return domaine
    }
    renderSecteur = () => {
        const { domaine } = this.state
        let secteur=[]
        if(domaine){
            const sec = data.domain.find(d => d.name === domaine)
            secteur = sec.secteur.map(elem => {
                return { label: elem.name, value: elem.name }
            })
        }
        return secteur
    }
    handleChange = (d) => {
        this.setState({ domaine: d.value })
    }
    renderCenterDeFormation = () => {
        const centre = data.domain.flatMap(d => {
            return d.secteur.flatMap(dCenter => {
                return { name: d.name, centre: dCenter.centre }
            })
        })
        console.log(centre, 'centre')
        return centre
    }
    handleChangeSecteur = (value) => {
        this.setState({ secteur: value })
    }
    renderCenterBySecteur = () => {
        const { secteur, domaine } = this.state
        let center = []
        const sec = data.domain.find(d => d.name === domaine)
       // this.setState({centerList:sec.secteur.find(d => d.name === secteur.value)})
if(secteur && secteur.value){
    center=sec && sec.secteur && sec.secteur.find(d => d.name === secteur.value)
    if(sec && sec.secteur && sec.secteur.length>0){
    center=sec.secteur.find(d => d.name === secteur.value)

}
}

        return center
    }
    render() {
        const { domaine, secteur } = this.state
        console.log(secteur, 'sec')

        return (

            <div>
                domaine: <Select onChange={this.handleChange} options={this.renderDomaine() ? this.renderDomaine() : []} />
                {domaine && <div>secteur: <Select onChange={this.handleChangeSecteur} options={this.renderSecteur() ? this.renderSecteur() : []} /></div>}
                 {(domaine && secteur) ? <INFOPAGE domaine={domaine} secteur={secteur.value} List={this.renderCenterBySecteur() ? this.renderCenterBySecteur().centre : []}/> : []} 
                ----------------------------------------------------------------------------------------------------------------------
                 {(domaine && secteur) ? <INFOPAGE domaine={domaine} secteur={secteur.value} List={this.renderCenterBySecteur() ? this.renderCenterBySecteur().centre.sort(function(a, b){
    return a.rating-b.rating
}) : []}/> : []} 

            </div>


        )
    }
}


export default Test
