import React from 'react'
import '../css/style.css'
import '../css/easy-responsive-tabs.css'
import '../css/flexslider.css'
import '../css/icons.css'
import '../css/owl.carousel.css'
import '../css/ie7/ie7.css'
import '../css/bootstrep.css'
import Header from '../header/Header'
import Footer from '../home/Footer'
import { makeStyles } from '@material-ui/styles'
import { url } from '../api'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
    background:{
        marginTop:"90px",
    }

})

const Advisorlist = () => {
    const classes = useStyles();
  const [data, SetData] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    getList();
  }, []);

  function getList() {

    
    fetch(`${url}/advisor/viewadvisor`).then((result) => {
      result.json().then((resp) => {
        console.log(resp.data);
        SetData(resp.data);
      });
    }); 
  }

  return (
      <>
      <Header/>
      <div className={classes.background} >
    <section class="section section-bg" id="call-to-action" style={{backgroundImage:"url(../images/banner-image-1-1920x500.jpg)"}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="cta-content">
                        <br/>
                        <br/>
                        <h2>Meet our <em>Advisor</em></h2>
                        <p>Auxilium Insura's Best Advisors Are Always Here For Your Support</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="section" id="trainers">
        <div class="container">
            <br/>
            <br/>
            <div class="row">
    {data.map((item) => (<>
                
                <div class="col-md-3 col-sm-6">
                    <div class="trainer-item">
                        <div class="image-thumb">
                    <input type="checkbox"  onClick={()=>{navigate(`/Contactlife/${item._id}`)}}/><p>select your advisor</p>
                            <img src={item.image} alt=""/>
                        </div>
                        <div class="down-content">
                            <span>{item.category}</span>
                            <h4>{item.name}</h4>
                            <h6>{item.number}</h6>
                            <p>{item.discription}</p>
                            <ul class="social-icons">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </>
        ))}      

                {/* <div class="col-md-3 col-sm-6">
                    <div class="trainer-item">
                        <div class="image-thumb">
                            <img src="../images/team-image-2-646x680.jpg" alt=""/>
                        </div>
                        <div class="down-content">
                            <span>Health insurence advisor</span>
                            <h4>Jane Smith</h4>
                            <p>Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in dui pulvinar imperdiet. Nunc consectetur.</p>
                            <ul class="social-icons">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div> */}
                {/* <div class="col-md-3 col-sm-6">
                    <div class="trainer-item">
                        <div class="image-thumb">
                            <img src="../images/team-image-3-646x680.jpg" alt=""/>
                        </div>
                        <div class="down-content">
                            <span>Bike insurence advisor</span>
                            <h4>Kate Johnson</h4>
                            <p>Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in dui pulvinar imperdiet. Nunc consectetur.</p>
                            <ul class="social-icons">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>   */}
                {/* <h1>hello</h1> */}
                {/* <div class="col-md-3 col-sm-6">
                    <div class="trainer-item">
                        <div class="image-thumb">
                            <img src="../images/team-image-4-646x680.jpg" alt=""/>
                        </div>
                        <div class="down-content">
                            <span>Car insurence advisor</span>
                            <h4>Mark Green</h4>
                            <p>Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in dui pulvinar imperdiet. Nunc consectetur.</p>
                            <ul class="social-icons">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </div> 
    </section>

    </div>
    <Footer/>
    </>

  )
}

export default Advisorlist