import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../header/Header";
import { url } from "../../api";
import PolicyCarHeader from './PolicyCarHeader';

// import axios from "axios"
const useStyles = makeStyles({
  
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
    height:'100px',
    width:'200px',
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
  // width:"900px",
  height:"180px",
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
    marginTop:"80px",
    background:'#f0f8fe',

  },
  a:{
    display:"flex",
    textDecoration:"none",
    cursor:"pointer"

  },
  wp:{
    height:30,
    width:40,
    paddingRight:"10px",
    marginTop:"-5px"
    // marginTop:'5px'
  },
  p:{
    textDecoration:"none",
    fontSize:"20px",
    color:"green",
    marginTop:"-1px",
  },
  serchheader:{
    display:"flex",
    marginTop:"20px",
    marginBottom:"-10px"
  },
  serch:{
    width:"200px",
    marginLeft:"20px",
    borderRadius:"5px",
  },
  serchp:{
    fontSize:"16px",
    marginTop:"5px"
  },
  icon:{
    marginLeft:"10px",
    color:"rgb(77 161 240)"
  }
});

const Carpolicy = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [data, SetData] = useState([]);

  const [logo, SetLogo] = useState("");
  const [primumamount, SetPrimumamount] = useState("");
  const [timeduration, SetTimeduration] = useState("");

  const [cover, SetCover] = useState("");
  const [idv, SetIdv] = useState("");
  const [shortdiscription, SetDiscription] = useState("");
//   const [purchaseyear, SetPurchaseyear] = useState("");

  

  useEffect(() => {
    getList();
  }, []);



  function getList() {

    
    fetch(`${url}/policy/viewcar`).then((result) => {
      result.json().then((resp) => {
        console.log(resp.data);

        SetData(resp.data);

        SetLogo(resp.data[0].logo);
        SetPrimumamount(resp.data[0].primumamount);
        SetTimeduration(resp.data[0].timeduration);
        SetCover(resp.data[0].cover);

        SetIdv(resp.data[0].idv);
        SetDiscription(resp.data[0].shortdiscription);
        // SetPurchaseyear(resp.data[0].purchaseyear);
      
      });
    });
  }

  return (
    <>
      <Header />
      <div className={classes.PolicyHealthHeader}> 
      <PolicyCarHeader/>
      </div>
      <div className={classes.container}> 
      <div className={classes.serchheader}>              
              <div><p className={classes.serchp}>Find Best Policy</p></div>
              <div className={classes.serch}><input type="text" placeholder="enter policy details"/></div>
              <div className={classes.icon}> <i class="fa fa-search fa-2x"></i></div>
            </div>
          {data.map((item) => (
            <div className={classes.policy}>
                  <div className={classes.main}>  
                      <div className={classes.policycontent}>      
                      <div className={classes.logos}>                              
                                <a className={classes.a} href="https://wa.me/9510542252">  <img className={classes.wp} src="../images/whatsapp.png" alt="" /> <p className={classes.p}>Share</p> </a>                         
                                <img className={classes.img} src={item.logo} alt="" />
                            </div>
                            <div className={classes.element}>
                                <p>{item.shortdiscription}</p>
                                <h4>Claims Settled {item.cover}</h4>
                            </div>
                            <div className={classes.element}>
                                 <h4>For  {item.timeduration}</h4>
                                 <h4>IDV ₹  {item.idv}</h4>
                            </div>
                                <div className={classes.element}>
                                <button className={classes.primumamount}>₹{item.primumamount}</button>
                                {/* <button class="viewdetails">View Details</button> */}
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

export default Carpolicy;
