import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';
import SimpleSlider from './main';

export default class Home extends Component {
    render() {
        return (
            <div>
              <Header />
              <SimpleSlider/>
              <Footer/>
          
            </div>
        )
    }
}