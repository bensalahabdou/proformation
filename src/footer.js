import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
      
    <MDBFooter  className="font-small pt-4 mt-4" id="foot1">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
      
          <MDBCol md="6">
            <h5 className="title">Contactez nous:<br/><span className="footer-email">Email: proforma@gmail.com</span></h5>
            
          </MDBCol>
          <MDBRow className="pb-3">
                    <MDBRow>
                        <MDBCol md="12" className="py-5" className="py-5">
                            <div className="mb-5 flex-center">
                                <a className="fb-ic" href="/">
                                    <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x" />
                                </a>
                                <a className="gplus-ic" href="/">
                                    <i className="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x" />
                                </a>
                                <a className="ins-ic" href="/">
                                    <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x" />
                                </a>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBRow>
          <MDBCol md="3">
            <h5 className="title">CONTACTS:</h5>
            <ul>
              <li className="list-unstyled">
              Télephone: + 216 71 255 655
              </li>
              <li className="list-unstyled">
              Adresse: GoMyCode Hackerspace, Immeuble NEO, 2ème étage, Rue du lac lochness, Les Berges du Lac1, Tunis 1053
              </li>
              
            </ul>
          </MDBCol>
         
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3" id="foot">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <h5 > ProFormation.com </h5>
        </MDBContainer>
        </div>
    </MDBFooter>
    
  );
}

export default FooterPage;