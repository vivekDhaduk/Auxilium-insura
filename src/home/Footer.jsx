import React from 'react'
import '../css/style.css'
import '../css/easy-responsive-tabs.css'
import '../css/flexslider.css'
import '../css/icons.css'
import '../css/owl.carousel.css'
import '../css/ie7/ie7.css'
import '../css/bootstrep.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer>
        <div class="container footer">
            <div class="row contact-sec">
                <div class="col-md-5 col-lg-5">
                    <h2 class="footerfont">Auxilium <span> Insura</span></h2>
                    <div class="row">
                        <div class="col-sm-6">
                            <p class="footerfont">A-2003 Auxilium Insura.lmtd, pelediuum mall Yogi cwok - Surat
                                <br/>Zip - 395006</p>
                        </div>
                        <div class="col-sm-6">
                            <ul>
                                <li><a href="#"><i class="fa fa-phone"></i> +91 9510542252</a></li>
                                <li><a href="#"><i class="ti-email"></i> auxiliumnsura@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <a href="#" class="btn-default " onClick={()=>{navigate('/contact')}}>Contact Us</a>
                </div>
                <div class="col-md-5 col-lg-5 col-md-offset-2 col-lg-offset-2">
                    <h2  class="footerfont">Advisor <span> Detail</span></h2>
                    <div class="row">
                        <div class="col-sm-6">
                            <p>A-2003 Auxilium Insura.lmtd, pelediuum mall Yogi cwok - Surat
                                <br/>Zip - 395006</p>
                        </div>
                        <div class="col-sm-6">
                            <ul>
                                <li><a href="#"><i class="fa fa-phone"></i> +91 6354653533</a></li>
                                <li><a href="#"><i class="ti-email"></i> auxiliumnsuraadviser@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <a href="#"  class="btn-default" onClick={() => { navigate('/Advisor')}}>Contact Advisor</a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 col-lg-8">
                    <ul class="footer-nav">
                        <li><a href="#home" onClick={()=>{navigate('/')}}>Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="" onClick={()=>{navigate('/Blog')}}>Blog</a></li>
                        <li><a href="#partner" onClick={()=>{navigate('/')}}>Compnies represented</a></li>
                        <li><a href="" onClick={()=>{navigate('/contact')}}>Contact us</a></li>
                        <li><a href="#Services" onClick={()=>{navigate('/')}}>Services</a></li>
                        <li><a href="#product" onClick={()=>{navigate('/')}}>Products</a></li>
                    </ul>
                </div>
                <div class="col-md-2 col-lg-2 col-md-offset-2 col-lg-offset-2">
                    <ul class="footer-social">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        </footer>
  )
}

export default Footer