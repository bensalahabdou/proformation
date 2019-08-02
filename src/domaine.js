import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Test from './test'
import Header from './header'


export default class Domaine extends Component {
    render() {
        return (
            <div className="domaine">
               
                   <Header />
                
               <div>
                 <img src="http://img.icbdr.com/images/FR/images/cao-emplois-mecanique_cao.jpg" width="33.33%" height="250"/>
                 <img src="http://iip.lu/wp-content/uploads/sites/156/2016/04/service.jpg" width="33%.33" height="250"/>
                 <img src="http://www.kaizen-skills.ma/wp-content/uploads/2012/12/about-3pm.jpg" width="33%.33" height="250"/>
              </div>
              <div className="domaine-selector">
                  <h3>Choisir le domaine puis le secteur</h3>
                  <Test/>
              </div>    
            </div>
        )
    }
}
