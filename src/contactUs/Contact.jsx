import React from 'react'
import '../css/style.css'
import '../css/easy-responsive-tabs.css'
import '../css/flexslider.css'
import '../css/icons.css'
import '../css/owl.carousel.css'
import '../css/ie7/ie7.css'
import '../css/bootstrep.css'

const Contact = () => {
  return (
      
    <div>
        
        <div id="page-content">
        <section class="breadcrumb">
            <div class="container">
                <h2>Contact Us</h2>
                <ul>
                    <li><a href="index.html">Home</a> </li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </section>
        <section class="contact-us">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <div class="form-box">
                            <h2>Get in Touch</h2>
                            <div class="form-content">
                                <input type="text" name="name" placeholder="Your Name" />
                                <input type="text" name="email" placeholder="Email" />
                                <input type="text" name="subject" placeholder="Subject" />
                                <textarea rows="1" cols="1" name="message" placeholder="Message"></textarea>
                                <div class="text-center">
                                    <input type="submit" class="btn-default" value="Submit" />
                                </div>
                            </div>
                        </div>
                        <div class="contact-info">
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="contact-address">
                                        <h3>Address</h3>
                                        <div>
                                            <i class="icon ti-home"></i>
                                            <p>E104 Dharti -2 , Nr Silverstar Mall
                                                <br/>Chandlodia - Ahmedabad
                                                <br/>Zip - 382481</p>
                                            <p class="social">
                                                <a href="#"><i class="fa fa-facebook"></i></a>
                                                <a href="#"><i class="fa fa-twitter"></i></a>
                                                <a href="#"><i class="fa fa-google-plus"></i></a>
                                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="contact-dtl">
                                        <h3>Contact Details</h3>
                                        <div>
                                            <i class="icon fa fa-phone"></i>
                                            <p>+91 123 456 7890</p>
                                        </div>
                                        <div>
                                            <i class="icon ti-email"></i>
                                            <p><a href="#">info@bootstrapmart.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
    
    </div>
    
  )
}

export default Contact