import React from 'react';
import logo from '../../Img/logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className="main" style={{background:"#000000",color:"#fff"}}>
             <div className="container py-5" >
            <div className="row mt-3">
                <div className="col-md-4">
                    <h4 className="mb-4">About Us </h4>
                    <img src={logo} width="100px" alt="" />
                    <p className="mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                </div>
                <div className="col-md-2"> 
                <h4 className="mb-4">Usefull Links</h4>
                    <ul className="list-unstyled usefull">
                        <li className="mb-2"  ><i class="far fa-dot-circle"></i> <a href=""> Products</a></li>
                        <li className="mb-2" ><i class="far fa-dot-circle"></i> <a href=""> Variants</a></li>
                        <li className="mb-2" ><i class="far fa-dot-circle"></i> <a href=""> About</a></li>
                        <li className="mb-2" ><i class="far fa-dot-circle"></i> <a href=""> Specials</a></li>
                        <li className="mb-2" ><i class="far fa-dot-circle"></i> <a href="">  Technical Specs </a></li>
                    </ul>
                </div>
                <div className="col-md-3"> 
                <h4 className="mb-4">CONTACT INFO</h4>
                <ul className="list-unstyled contact">
             <li>  <i class="fas fa-phone"></i>   Phone <br/> +9890258293 </li>
                        <li> <i class="fas fa-envelope-open-text"></i>  Email<br/> demo@admin.com </li>
                        <li> <i class="fas fa-map-marker-alt"></i> Address <br/> 3892 Fincham Road,
                            Los Angeles</li>
                   
                    </ul>
                </div>
                <div className="col-md-3">
                <h4 className="mb-4">Subscribe</h4>
                <div class="input-group mb-3  ">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span class="input-group-text" id="basic-addon2"><i class="fas fa-arrow-circle-right"></i></span>
                </div>
                <h4>Follow Us</h4>
                <div className="social"> 
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-youtube"></i>
                </div>
               
                     </div>
            </div>
        </div>
        </div>
       
    );
};

export default Footer;