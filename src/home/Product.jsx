import React from 'react'
import '../css/style.css'
import '../css/easy-responsive-tabs.css'
import '../css/flexslider.css'
import '../css/icons.css'
import '../css/owl.carousel.css'
import '../css/ie7/ie7.css'
import '../css/bootstrep.css'
import { useNavigate } from 'react-router-dom'
// import '../js/custom.js'

const Product = () => {
    const navigate = useNavigate()
    const abc=()=>{
        localStorage.removeItem("jwt")
        navigate("/Login")
    }
    const token = localStorage.getItem("jwt")
  return (
    <div  >
        <section section class="product-tab" id="product">
            <div class="container">
                <div class="row">
                    <div id="parentVerticalTab">
                        <h2>Products</h2>
                        <ul class="resp-tabs-list hor_1 col-sm-3 col-md-3 col-lg-3">
                            { token ?<li onClick={()=>{navigate('/lifeform')}}><i class="ti-heart-broken"></i> Life Insurance</li>:<li   onClick={abc}><i class="ti-heart-broken"></i> Life Insurance</li> }
                            { token ?<li onClick={()=>{navigate('/Healthform')}}><i class="fa fa-medkit"></i> Health Insurance</li>:<li onClick={abc}><i class="fa fa-medkit"></i> Health Insurance</li>}
                            { token ?<li onClick={()=>{navigate('/bikeform')}}><i class="fa fa-motorcycle"></i> Bike Insurance</li>:<li onClick={abc}><i class="fa fa-motorcycle"></i> Bike Insurance</li> }
                            { token ?<li onClick={()=>{navigate('/carform')}}><i class="ti-car"></i> Car Insurance</li>:<li onClick={abc}><i class="ti-car"></i> Car Insurance</li> }
                        </ul>
                        <div class="col-sm-5 col-md-5 col-lg-5 resp-tabs-container hor_1">
                            <div class="flex">
                                { token ?<div class="vivek col-md-6 col-sm-6" onClick={()=>{navigate('/lifeform')}}>

                                    <img src="images/l3.jpg" alt="" class="img-responsive" />
                                <div class="prod-tab-content">
                                    <h4>
                                        <span class="prod-cion"><i class="ti-heart-broken"></i></span>
                                        Life Insurance
                                    </h4>
                                </div>
                                </div>:<div class="vivek col-md-6 col-sm-6" onClick={abc}>

                                    <img src="images/l3.jpg" alt="" class="img-responsive" />
                                <div class="prod-tab-content">
                                    <h4>
                                        <span class="prod-cion"><i class="ti-heart-broken"></i></span>
                                        Life Insurance
                                    </h4>
                                </div>
                                </div>}
                                { token ?<div class=" vivek col-md-6 col-sm-6" onClick={()=>{navigate('/Healthform')}}>
                                <img src="../images/7.webp" alt="" class="img-responsive" />
                                    <div class="prod-tab-content">
                                        <h4>
                                            <span class="prod-cion"><i class="fa fa-medkit"></i></span>
                                            Health Insurance
                                        </h4>
                                    </div>
                                </div>:<div class=" vivek col-md-6 col-sm-6" onClick={abc}>
                                <img src="../images/7.webp" alt="" class="img-responsive" />
                                    <div class="prod-tab-content">
                                        <h4>
                                            <span class="prod-cion"><i class="fa fa-medkit"></i></span>
                                            Health Insurance
                                        </h4>
                                    </div>
                                </div>}
                                { token ?<div class="vivek col-md-6 col-sm-6" onClick={()=>{navigate('/bikeform')}}>
                                <img src="../images/harly.jpg" alt="" class="img-responsive" />
                                    <div class="prod-tab-content">
                                        <h4>
                                            <span class="prod-cion"><i class="fa fa-motorcycle"></i></span>
                                            Bike Insurance
                                        </h4>
                                    </div>
                                    </div>:<div class="vivek col-md-6 col-sm-6" onClick={abc}>
                                <img src="../images/harly.jpg" alt="" class="img-responsive" />
                                    <div class="prod-tab-content">
                                        <h4>
                                            <span class="prod-cion"><i class="fa fa-motorcycle"></i></span>
                                            Bike Insurance
                                        </h4>
                                    </div>
                                    </div>}
                                { token ?<div class="vivek col-md-6 col-sm-6" onClick={()=>{navigate('/carform')}}>

                                <img src="images/2.jpg" alt="" class="img-responsive" />
                                <div class="prod-tab-content">
                                    <h4>
                                        <span class="prod-cion"><i class="ti-car"></i></span>
                                        Car Insurance
                                    </h4>
                                </div>
                                </div>:<div class="vivek col-md-6 col-sm-6" onClick={abc}>

                                <img src="images/2.jpg" alt="" class="img-responsive" />
                                <div class="prod-tab-content">
                                    <h4>
                                        <span class="prod-cion"><i class="ti-car"></i></span>
                                        Car Insurance
                                    </h4>
                                </div>
                                </div>}
                            
                                    
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
  )
}

export default Product