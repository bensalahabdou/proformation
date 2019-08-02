
 
// const slideImages = [
//   'http://pi.tn/wp-content/uploads/2019/04/gomycode.jpg',
//   'https://symfony.3wa.fr/web/images/logo_academy.gif',
//   'http://www.infoplus.tn/images/Accelerees/info-plus-bizerte-tunisie-formation-en-Programmation-1.jpg',
//   'https://ween.tn/media/cache/my_thumb_fb/uploads/image/46063/46061/avatar/avatar.jpg',
//   'http://www.institutgitas.com/images1/logogitas.gif'
// ];
 
import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div className="intro">
                
                <Slider {...settings}>
                    <div>
                        <img
                            className="prog"
                            src="http://pi.tn/wp-content/uploads/2019/04/gomycode.jpg"   width="150" height="200"
                        />
                    </div>
                    <div>
                        <img
                            className="prog"
                            src="https://symfony.3wa.fr/web/images/logo_academy.gif"  width="150" height="200"
                        />
                    </div>
                    <div>
                        <img
                            className="prog"
                            src="https://ween.tn/media/cache/my_thumb_fb/uploads/image/46063/46061/avatar/avatar.jpg" width="150" height="200"
                        />
                    </div>
                    <div>
                        <img
                            className="prog"
                            src="http://www.institutgitas.com/images1/logogitas.gif" width="150" height="200"
                        />
                    </div>
                    <div>
                        <img className="prog" src="https://ween.tn/media/cache/my_thumb_fb/uploads/image/39750/39748/avatar/avatar.png" width="150" height="200"/>
                    </div>
                    <div>
                        <img
                            className="prog"
                            src="https://conseil-recherche-innovation.net/sites/default/files/styles/logo_projet_large/public/public/projets/logos/Logo%20FormaLab.png?itok=AsknC2WB" width="150" height="220"/>
                    </div>
                </Slider>
            </div>
        );
    }
}