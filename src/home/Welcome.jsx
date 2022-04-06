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
//      

const Welcome = () => {

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
    <div class="container">
            <div class="row">
                <section class="col-sm-7 col-md-8 col-lg-8">
                    <div class="intro">
                        <h2>Welcome to Auxilium Insura</h2>
                        <p>Auxilium Insura is now online insurence purchase system that provide you the best policy and the term life plans. we also provide the best security. Now you can contact our Auxilium Insura's advisor and get the information that you want you to know. the best way to find your insurence is now on  Auxilium Insura</p>
                        <ul class="row">
                            <li class="col-sm-4 welcome">
                                <i class="fa fa-life-ring"></i>
                                <h3>24x7 Support</h3>
                                <p>Now we provide the 24 x 7 support from the Auxilium Insura </p>
                            </li>
                            <li class="col-sm-4 welcome">
                                <i class="ti-marker-alt"></i>
                                <h3>Easy Claim system</h3>
                                <p>Auxilium Insura Give you the easiest claim system</p>
                            </li>
                            <li class="col-sm-4 welcome">
                                <i class="ti-email"></i>
                                <h3>Get Started with us</h3>
                                <p>contact us on an auxiliuminsura@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="col-sm-5 col-md-4 col-lg-4 backgroundofquets">
                    <div class="get-quote-form">
                        <h2>Get a free quote form us</h2>
                        <form id="get-quote" onSubmit={OnSingup}>
                            <div>
                                <input type="text" value={data.name}
                          onChange={OnInput} name="name" placeholder="Your Name" />
                            </div>
                            <div>
                                <input type="text" value={data.email}
                          onChange={OnInput} name="email" placeholder="Email" />
                            </div>
                            <div>
                                <input type="text" value={data.phoneno}
                          onChange={OnInput} name="phoneno" placeholder="Phone no" />
                            </div>
                            <div class="form-select">
                                <span></span>
                                {/* <select>
                                    <option>Product</option>
                                </select> */}
                            </div>
                            <div>
                                <textarea type="text" name="message" rows="1" cols="1" value={data.message}
                          onChange={OnInput} placeholder="Message"></textarea>
                            </div>
                            <div class="text-center">
                                <button type="submit"  class="btn-default getquet">Get a free quote</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
  )
}

export default Welcome