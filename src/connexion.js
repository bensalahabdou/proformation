import React from 'react';
import PropTypes from 'prop-types';
import {Button,SVGIcon,TextField,SelectField} from 'react-md';
import { Link } from 'react-router-dom';


const STRING_ITEMS = ['membre','partenaire'];

const Simple = ({ simplifiedMenu }) => (
 <div className="formulaire">
  <div className="signup">
 <div className="sign">
     <div className="titre">
   <h1> Sign Up </h1>
   </div>
   <div className="sel">
   <SelectField
     id="select-field-2"
     label="Membre/partenaire"
     placeholder="Placeholder"
     className="md-cell"
     menuItems={STRING_ITEMS}
     simplifiedMenu={simplifiedMenu}
   />
   </div>
   <TextField
     id="floating-center-title"
     label="Name"
     lineDirection="center"
     placeholder="Name"
     className="md-cell md-cell--bottom"
   />
   <TextField
     id="floating-center-title"
     label="Last Name"
     lineDirection="center"
     placeholder="Name"
     className="md-cell md-cell--bottom"
   />
   <TextField
     id="floating-center-title"
     label="Adress"
     lineDirection="center"
     placeholder="Adress"
     className="md-cell md-cell--bottom"
   />
   <TextField
     id="floating-center-title"
     label="Email"
     lineDirection="center"
     placeholder="Email"
     className="md-cell md-cell--bottom"
   />
   <TextField
     id="placeholder-only-password"
     placeholder="Enter your password"
     type="password"
     className="md-cell md-cell--bottom"
   />
   <div className="button">
   <Button flat secondary swapTheming className="btn">signup</Button>
   <Link to="/signin"><Button flat primary swapTheming>Sign in</Button></Link>
   </div>
 </div>
 </div>
 </div>
);
Simple.propTypes = {
 simplifiedMenu: PropTypes.bool,
};
export default Simple;