import React, { Component } from "react";
// import Slider from "react-slick";

import Slideshow from './slide';

export default class SimpleSlider extends Component {
  render() {
    return (
      <div className="slider">
        <div>
        <Slideshow/>
        </div>
        <div><h2 className="description">L'idée de ce site est d'aider l'utilisateur a choisir la formation qui répond à ses attentes est qu'il lui facilite l'intégartion à la vie professionnelle. Quelques soit le profil de l'utilisateur Etudient, Professionnel ou Entreprise le site peut donnez une idée claire et fiable sur la qualité de chaque centre de formation selon le domaine et le secteur convoité toute en se basant sur les avis l'évaluation des intervenant de ce site qui sont l'Etudient ou Professionnel et l'Entreprise ou Partenaire pour chaque chaque centre de formation. </h2></div>
        <div className="query">
          <div><h2>Quesque je peux gagner si j'y participe ? </h2></div>
          <div className="card-intervenant">
            <h3 className="intervenant">Etudient ou Professionnel</h3>
           <p className="description-card">On peut partager nos expériences et par conséquences avoir des choix de centre plus fiable et puisque les entreprises partagent leur avis sur les centres donc on peut garantir un stage ou un emploi.</p>
           </div>
           <div className="card-intervenant">
            <h3 className="intervenant">Entreprise ou Partenaire</h3>
           <p className="description-card">Ces trés efficace pour les entreprises aussi parce que la recherche des profiles va étre plus facile si on cherche dans un centre bien réputé par sa qualité de formation.</p>
           </div>
          
        </div>
      </div>
    );
  }
}
