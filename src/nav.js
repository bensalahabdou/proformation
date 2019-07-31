import React, { Component } from 'react'

export default class NavMenu extends Component {
    render() {
        const menuItem = { title: "Home"};
const menuItem1 = { title: "Actualité"};

const menuItem2 = { title: "Domaine",
subMenu: [
    "Informatique",
    "Mécanique",
    "Electrique"
]};
const menuItem3 = {title: "Contacts"};
const menuItem4 = {title: "Connexion"};

const menuItemList = [menuItem, menuItem1, menuItem2, menuItem3, menuItem4];

        return (
            <div>
              
   <ul className="menu">
       {menuItemList.map((el, i) => (
           <li key={i} className="menu-item">
               <a className="menu-item__link" href="#" style={{color: el.isActive ? '#6bb09d' : 'black'}}>
                   {el.title}
               </a>
               {el.subMenu && (
                   <ul className="sub-menu">
                       {el.subMenu.map((element) => (
                           <li  className="sub-menu-item">
                               {element}
                           </li>
                       ))}
                   </ul>
               )}
           </li>
       ))}
   </ul>
   </div>
);


                       }  
}