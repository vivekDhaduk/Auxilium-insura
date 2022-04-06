import React from 'react'
import Header from '../../header/Header'
import Footer from '../../home/Footer'
import { makeStyles } from '@material-ui/styles'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { url } from "../../api";
import { useEffect , useState} from "react";
import {  useParams } from "react-router-dom";
import Contactadvisor from '../../ContactAdvisor/Contactadvisor';

const useStyles = makeStyles({
    background:{
        marginTop:"90px",
    },
    policy:{
      width:"800px",
      marginTop:"50px",
      marginLeft:"300px",
      boxShadow:"5px 5px 10px lightgray",
      display:"flex",
      background:"#fff",
      padding:10
  },
  company:{
      height:"100px",
      width:"200px"
  },
  logo:{
      marginLeft:50,
      // paddingTop:20
  },
  name:{
      marginLeft:70
  },
  cover:{
      marginLeft:70,
      
  },
  h2:{
      marginTop:"-10px"
  },
  whatsapp:{
      display:"flex",
      marginLeft:70,
      marginTop:"30px",
      border:"solid 1px black",
      height:"40px",
      padding:"5px",
      borderRadius:"8px",
      cursor:"pointer"
  },
  wp:{
      height:30,
      width:30
  },
  wptext:{
      fontSize:"20px",
      color:"green",
      marginTop:"5px",
      marginLeft:"10px"
  },
  button:{
    marginLeft:"30px",
    marginTop:"25px"
  },
  roomid:{
      marginLeft:"300px",
      marginTop:"30px"
  }

})



const Contactcar = () => {

    const classes = useStyles();
    const {id} = useParams();
      const abc = id;
  
      const [data, SetData] = useState([]);
  
  useEffect(() => {
    getList();
  }, []);
  
  
  function getList() {
  
    
    fetch(`${url}/policy/carcompare2/${abc}`).then((result) => {
     
      result.json().then((resp) => {
        console.log(resp.data)
        SetData(resp.data);
        // SetLogo(resp.data.logo);
        // SetPrimumamount(resp.data.primumamount);
        // SetTimeduration(resp.data.timeduration);
        // SetDiscription(resp.data.shortdiscription);
        // SetCover(resp.data.cover);   
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
                  <h2>Meet our <em>Life Insurence</em> Advisor</h2>
                  {/* <p>Auxilium Insura's Best Advisors Are Always Here For Your Support</p> */}
              </div>
          </div>
      </div>
  </div>
</section>

<ResponsiveContainer aspect={3} width="100%">
                    <div className={classes.policy}>
                        <div className={classes.logo}>
                            <img  className={classes.company} src={data.logo}/>
                        </div>
                        <h2 className={classes.name}>{data.name}</h2>
                        <div className={classes.cover}>
                            <h3>Claims Settled</h3>
                            <h3 className={classes.h2}>{data.cover} %</h3>
                        </div>
                        <div >
                            <button className={classes.button}>₹ {data.primumamount} /-</button>
                        {/* <a href='https://wa.me/9510542252'><label className={classes.whatsapp}><img className={classes.wp} src='../images/whatsapp.png'/><p className={classes.wptext}>Share</p></label></a> */}
                        
                        
                        </div>
                    </div>
                </ResponsiveContainer>
                <p className={classes.roomid}> * For contact Room-id is Advisor's Name </p>

<section class="section" id="trainers">
  <div class="container">
      <br/>
      <br/>
      <div class="row">
      <div class="col-md-3 col-sm-6">
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
          </div>
<Contactadvisor/>
         

       </div>
    </div>
 </section>
 </div>
<Footer/>
    </>
  )
}

export default Contactcar