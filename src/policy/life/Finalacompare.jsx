import React from 'react'
import Lifecompare from './Lifecompare'
import Lifecompare2 from './Lifecompare2'
import { url } from '../../api'
import { useEffect } from 'react'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import PolicylifeHeader from './PolicylifeHeader'


const useStyles = makeStyles({
  basecontainer:{
    marginTop:"70px"
  },
  comparebutton:{
    marginTop:"20px",
    marginLeft:"300px"
  },
  wp:{
    height:25,
    width:25,
    paddingRight:"10px",
    marginTop:"-5px"
    // marginTop:'5px'
  },
  wpa:{
    display:"flex",
    fontSize:"18px",
    color:"green"
  },

  compare:{
    display:"flex",
    marginLeft:"700px",
    // height:"30px",
    width:"250px",
    background:"#fff",

  },
  policycontent:{
    marginLeft:"-100px",
    display:"flex",
    marginTop:'30px',
    background:"#fff",
    paddingTop:"30px"
    
  },
  img:{
    height:'80px',
    width:'160px',
    marginTop:"10px"
  },
  container:{
    marginTop:'-30px',
    paddingTop:'20px',
    paddingBottom:'30px',
    background:'#f0f8fe',
    paddingLeft:'170px',
    // backgroundImage:"url('./img/policubg.jpg')",

    
},
main:{
  // border:"solid 1px black",
  borderRadius:"5px",
  padding:"10px",
  textAlign:"center",
  width:"900px",
  // display:"flex",
  marginTop:"30px",
  // height:"200px",
  boxShadow: "5px 5px 20px lightgray",
},
policycontent:{
  display:"flex",
  width:"900px",
  height:"160px",
  paddingTop:"30px",
  background:"#fff",

},
policy:{
  // boxShadow: "5px 5px 15px lightgray",

},
logos:{
  textAlign:"center",
  marginLeft:"25px",
  width:"200px"
},
  element:{
    textAlign:"center",
    marginLeft:"25px",
    width:"200px",
    marginTop:"15px"
  },
  primumamount:{
    // height:"30px",
    color:"black",
    width:"100px",
    background:"#b3d9ff", 
    fontSize:"18px"
  },
  PolicyHealthHeader:{
    marginTop:"60px",
    background:'#f0f8fe',

  },
  a:{
    display:"flex",
    textDecoration:"none",

  },
  wp:{
    height:30,
    width:30,
    paddingRight:"10px",
    marginTop:"-5px"
    // marginTop:'5px'
  },
  p:{
    textDecoration:"none",
    fontSize:"20px",
    marginTop:"-1px",
    color:"green"
  }

})
const Finalacompare = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const abc = localStorage.getItem("cid")
  const xyz = localStorage.getItem("cid2")
  const home=()=>{
    localStorage.removeItem("cid")
    localStorage.removeItem("cid2")
    navigate("/Lifepolicy")
}

  const [data, SetData] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  function getList() {
    fetch(`${url}/policy/lifecompare1/${abc}`).then((result) => {
      result.json().then((resp) => {
        console.log(resp)
        SetData(resp.data);    
      });
    });
  }

  // ========================== 2nd policy start ====================

  const [data2, SetData2] = useState([]);
  useEffect(() => {
    getList2();
  }, []);
  function getList2() {
    fetch(`${url}/policy/lifecompare1/${xyz}`).then((result) => {
      result.json().then((resp) => {
        console.log(resp)
        SetData2(resp.data);    
      });
    });
  }
  return (
    <>

<div className={classes.basecontainer}>
        <PolicylifeHeader />

            <div className={classes.main}>         
                    <div className={classes.policy}>
                <div className={classes.main}>  
                    <div className={classes.policycontent}>      
                    <div className={classes.logos}>                              
                                                       
                                <img className={classes.img} src={data.logo} alt="" />
                            </div>
                          <div className={classes.element}>
                              <p>{data.shortdiscription}</p>
                              <h4>Claims Settled {data.cover}</h4>
                          </div>
                          <div className={classes.element}>
                               <h4>For  {data.timeduration} </h4>
                          </div>
                              <div className={classes.element}>
                              <button className={classes.primumamount}>₹{data.primumamount}</button>
                              <button class="viewdetails">View Details</button>
                          </div>
                    </div>
                    <div class="dropdown3">
                          <div class="dropbtn3">Why is this the best plan for you ? </div>
                          <div class="dropdowncontent3"> <a>{data.longdiscription}</a></div>
                    </div>                   
                </div>                     
          </div>  
         


            </div>
        </div>
 

 {/* =============================== 2md list ====================== */}

 <div className={classes.basecontainer}>
        {/* <PolicylifehHeader /> */}

            <div className={classes.main}>         
                    <div className={classes.policy}>
                <div className={classes.main}>  
                    <div className={classes.policycontent}>      
                    <div className={classes.logos}>                              
                                                       
                                <img className={classes.img} src={data2.logo} alt="" />
                            </div>
                          <div className={classes.element}>
                              <p>{data2.shortdiscription}</p>
                              <h4>Claims Settled {data2.cover}</h4>
                          </div>
                          <div className={classes.element}>
                               <h4>For  {data2.timeduration} </h4>
                          </div>
                              <div className={classes.element}>
                              <button className={classes.primumamount}>₹{data2.primumamount}</button>
                              <button class="viewdetails">View Details</button>
                          </div>
                    </div>
                    <div class="dropdown3">
                          <div class="dropbtn3">Why is this the best plan for you ? </div>
                          <div class="dropdowncontent3"> <a>{data2.longdiscription}</a></div>
                    </div>                   
                </div>                     
          </div>  
         


            </div>
        </div>
<button onClick={home}>back to home</button>

    </>
  )
}

export default Finalacompare