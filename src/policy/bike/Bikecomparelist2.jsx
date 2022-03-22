import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../header/Header";
import { url } from "../../api";
import BikeHeaderpolicy from "./BikeHeaderpolicy";
// import PolicyCarHeader from "./PolicyCarHeader";
// import PolicyHealthHeader from "./PolicyHealthHeader";
// import PolicylifehHeader from './PolicylifeHeader';

// import axios from "axios"
const useStyles = makeStyles({
  wp:{
    height:30,
    width:30,
    paddingRight:"px",
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
  padding:"2px",
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
  // marginLeft:"25px",
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
  
  p:{
    textDecoration:"none",
    fontSize:"20px",
    marginTop:"-4px",
    color:"blue",
    marginLeft:"10px"
  }
  
  
 
});

const Bikecomparelist2 = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [data, SetData] = useState([]);

  const [logo, SetLogo] = useState("");
  const [primumamount, SetPrimumamount] = useState("");
  const [timeduration, SetTimeduration] = useState("");
  const [shortdiscription, SetDiscription] = useState("");


  const [cover, SetCover] = useState("");
//   const [annualincome, SetAnnualincome] = useState("");

  
  

  

  useEffect(() => {
    getList();
  }, []);



  function getList() {

    
    fetch(`${url}/policy/viewbike`).then((result) => {
      result.json().then((resp) => {
        console.log(resp.data);

        SetData(resp.data);

        SetLogo(resp.data[0].logo);
        SetPrimumamount(resp.data[0].primumamount);
        SetTimeduration(resp.data[0].timeduration);
        SetDiscription(resp.data[0].shortdiscription);

        SetCover(resp.data[0].cover);
        // SetAnnualincome(resp.data[0].annualincome);
         
      });
    });
  }

  return (
    <><Header />
    <div className={classes.PolicyHealthHeader}> 
    <BikeHeaderpolicy/>
    </div>
    <div className={classes.container}>
        {data.map((item) => (
          <div className={classes.policy}>
                <div className={classes.main}>  
                    <div className={classes.policycontent}> 
                    <input type="checkbox"  onClick={()=>{navigate(`/Bikecompare2/${item._id}`)}}/>
                    <div className={classes.logos}>                             
                                <a className={classes.a} href=""> <p className={classes.p} onClick={()=>{navigate(`/Bikecompare2/${item._id}`)}}>Compare</p>    </a>                         
                                <img className={classes.img} src={item.logo} alt="" />
                            </div>
                          <div className={classes.element}>
                              <p>{item.shortdiscription}</p>
                              <h4>Claims Settled {item.cover}</h4>
                          </div>
                          <div className={classes.element}>
                               <h4>For  {item.timeduration} </h4>
                          </div>
                              <div className={classes.element}>
                              <button className={classes.primumamount}>₹{item.primumamount}</button>
                              <button class="viewdetails">View Details</button>
                          </div>
                    </div>
                    <div class="dropdown3">
                          <div class="dropbtn3">Why is this the best plan for you ? </div>
                          <div class="dropdowncontent3"> <a>{item.longdiscription}</a></div>
                    </div>                   
                </div>                     
          </div>          
        ))}      
    </div>
    </>
  );
};

export default Bikecomparelist2;


// navigate(`/Lifecompare/${item._id}`)