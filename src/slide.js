import React from 'react';
import { Zoom } from 'react-slideshow-image';

 
const images = [
  'https://je-cree-mon-equilibre.com/wp-content/uploads/2015/10/r%C3%A9ussir-%C3%A0-changer.jpg',
  'https://www.karis-formation.com/wp-content/uploads/sites/7/2014/12/choix-secteur.png',
  'https://www.piloter.org/images/bon-objectif-formation.jpg',
  'http://www.agrorientation.com/actualite/cover-lenseignement-agricole-aussi-en-transition-21571.jpg',
  'https://secretsduecommerce.com/wp-content/uploads/2018/06/Untitled-design-33-e1528184393986.png',
  'https://www.gobelins.fr/sites/default/files/styles/news_main/public/thumbnails/image/cbaillou-adobestock_88932545_light.jpg?itok=uhkQ2Qj9',
  'https://www.sylvainwealth.com/wp-content/uploads/2016/10/changer-de-vie-40-ans.jpg'
];
 
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <Zoom {...zoomOutProperties} id="zoom">
        {
          images.map((each, index) => <img key={index} style={{width: "100%", height: "400px" }} src={each} />)
        }
      </Zoom>
    )
}

export default Slideshow