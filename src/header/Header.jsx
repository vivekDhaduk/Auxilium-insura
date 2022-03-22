import React from 'react'
import '../css/style.css'
import '../css/easy-responsive-tabs.css'
import '../css/flexslider.css'
import '../css/icons.css'
import '../css/owl.carousel.css'
import '../css/ie7/ie7.css'
import '../css/bootstrep.css'
import { useNavigate } from 'react-router-dom'
import { useEffect , useState} from "react";
import { url } from '../api'

{/* <link href="css/icons.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="css/easy-responsive-tabs.css " />
<link rel="stylesheet" type="text/css" href="css/flexslider.css " />
<link rel="stylesheet" type="text/css" href="css/owl.carousel.css">
<!--[if lt IE 8]><!-->
<link rel="stylesheet" href="ie7/ie7.css">
<!--<![endif]-->
<link href="css/style.css" rel="stylesheet" type="text/css"> */}

const Header = () => {
    const navigate = useNavigate()
    const abc=()=>{
        localStorage.removeItem("jwt")
        localStorage.removeItem("id")
        navigate("/login")
    }
const token = localStorage.getItem("jwt")

const id = localStorage.getItem("id")
// console.log("=========>",id)

const [data, SetData] = useState([]);

useEffect(() => {
    getList();
  }, []);

function getList() {
    fetch(`${url}/userIns/viewLoginData/${id}`).then((result) => {  
      result.json().then((resp) => {
        // console.log(resp)
        SetData(resp.data);  
        console.log("rrrrrrrrrr",resp)
      });
    });
  }

  return (
<>
    <header>
        <div class="top-bar">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 address">
                        <i class="ti-location-pin"></i> 2109 WS 09 Oxford Rd #127 ParkVilla Hills, MI 48334
                    </div>
                    <div class="col-sm-6 social">
                        <ul>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                            <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                        <i class="fa fa-bars"></i>
                    </button> 
                    <a class="navbar-brand" href="">
                        Auxilium<span> Insura</span>
                    </a>
                    <p>Call Us Now <b>+91 9510542252</b></p>
                </div>
                <div class="collapse navbar-collapse navbar-main-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="" onClick={()=>{navigate('/')}}>Home</a>
                        </li>
                        <li>
                            <a href="#product" class="scroll" onClick={()=>{navigate('/')}} >Insurence Product</a>
                        </li>
                        <li >
                            <a href="" onClick={()=>{navigate('/contact')}}>Contact</a>
                        </li>
                        <li>
                            <a href="" onClick={()=>{navigate('/Blog')}}>Blog</a>
                        </li>
                        
                        {token ?
                            <li>
                            {/* <a href="" onClick={abc}>{data}</a> */}
                            <a class="navbar-brand" href="" onClick={abc}>
                            <span>{data}</span>&#160;&#160;&#160; <b> LogOut &#160;<i class="fa fa-sign-out"></i></b> 
                    </a>
                    {/* <p><b>{data}</b></p> */}
                        </li>:
                        <li>
                            <a href="" onClick={()=>{navigate('/Login')}}>LogIn</a>
                        </li>
                        }
                        {/* <li>
                            <a href="#" class="btn-default">Buy Pro Version</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="clear"></div>
    {/* <!-- ========================================sliderstart========================================== --> */}
    </>
  )
}

export default Header