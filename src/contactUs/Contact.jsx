import React from 'react'
import '../css/style.css'
import '../css/easy-responsive-tabs.css'
import '../css/flexslider.css'
import '../css/icons.css'
import '../css/owl.carousel.css'
import '../css/ie7/ie7.css'
import '../css/bootstrep.css'
import { url } from '../api'
import axios from 'axios'
import { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phoneno:"",
        message:"" 
      });
      const [sub, setSub] = useState("");
    
      const OnInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
      };
    
      const Submite = async () => {
        const Sdata = await axios
          .post(`${url}/message/insert`, data)
          .then((res) => {
            console.log(res);
            setSub(res);
            setData({
                name: "",
                email: "",
                phoneno:"",
                message:"",
            });
          })
          .catch((err) => {
            console.log(err);
            // alert('Email Already Exist')
          });
      };
    
      const OnSingup = (e) => {
        e.preventDefault();
        Submite();
      };

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
                            <form class="form-content"  onSubmit={OnSingup}>
                                <input type="text" value={data.name}
                          onChange={OnInput} name="name" placeholder="Your Name" />
                                <input type="text" value={data.email}
                          onChange={OnInput}  name="email" placeholder="Email" />
                                <input type="text"  value={data.phoneno}
                          onChange={OnInput} name="phoneno" placeholder="Phone number" />
                                <textarea rows="1" cols="1" value={data.message}
                          onChange={OnInput}  name="message" placeholder="Message"></textarea>
                                <div class="text-center">
                                    <button type="submit" class="btn-default" value="Submit" >submit</button>
                                </div>
                            </form>
                        </div>
                        <div class="contact-info">
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="contact-address">
                                        <h3>Address</h3>
                                        <div>
                                            <i class="icon ti-home"></i>
                                            <p> A-2003 Auxilium Insura.lmtd, pelediuum mall
                                                <br/>Yogi cwok - Surat
                                                <br/>Zip - 395006</p>
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
                                            <p>+91 9510542252</p>
                                        </div>
                                        <div>
                                            <i class="icon ti-email"></i>
                                            <p><a href="#">auxiliuminsura@gmail.com</a></p>
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