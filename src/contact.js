import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';


export default class Contact extends Component {
    render() {
        return (
            <div>
              <Header />
             
              <div className="contact">
              <h5 className="contact">Contactez nous:</h5>
              <span className="contact">Email: proforma@gmail.com</span>
              <h5 className="contact">CONTACTS:</h5>
          
              <span className="contact">Télephone: + 216 71 255 655</span>
              <span className="contact">Adresse: GoMyCode Hackerspace, Immeuble NEO, 2ème étage, Rue du lac lochness, Les Berges du Lac1, Tunis 1053
                </span>
                
              </div>
          
            </div>
        )
    }
}