import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import NavMenu from './nav';
import SearchPage from './search';
import NavBar from './navbar';


export default class Header extends Component {
    render() {
        return (
            <div className="header-page">
               <div className="header">
                   
                   <Link to="/"><img className="logo" src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.15752-9/67958800_1073651643024599_1829430685392175104_n.jpg?_nc_cat=108&_nc_oc=AQkZ0ApbpcULNvXwXGxkoQ_pn_43sY6VqWVzzISWCy6WqI0lBW4v1kzftlQHM9PRce0&_nc_ht=scontent.ftun10-1.fna&oh=22026b4c85debc3fdd4e13f13d3951e9&oe=5DA10A4E" /></Link>
                   <SearchPage />
               </div>
               <div>
               <NavBar/>
               </div>  
            </div>
        )
    }
}
