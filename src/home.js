import React, { Component } from 'react';

import Header from './header';
import FooterPage from './footer';
import SimpleSlider from './main';

export default class Home extends Component {
    render() {
        return (
            <div>
              <Header />
              <SimpleSlider/>
              <FooterPage/>
          
            </div>
        )
    }
}