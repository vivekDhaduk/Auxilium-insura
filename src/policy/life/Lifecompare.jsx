import React from 'react'
import Header from '../../header/Header'
import Lifepolicy from './Lifepolicy'
import { makeStyles } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect , useState} from "react";
import PolicylifehHeader from './PolicylifeHeader';
import { url } from "../../api";
import axios from 'axios';


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

const Lifecompare = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const {id} = useParams();
  const abc = id;

  // const id1 = localStorage.setItem(abc)

  // policy 111111
  

  const [data, SetData] = useState([]);


  const [logo, SetLogo] = useState("");
  const [primumamount, SetPrimumamount] = useState("");
  const [timeduration, SetTimeduration] = useState("");
  const [shortdiscription, SetDiscription] = useState("");
  const [cover, SetCover] = useState("");
 
  useEffect(() => {
    getList();
  }, []);


  function getList() {

    
    fetch(`${url}/policy/lifecompare1/${abc}`).then((result) => {
     
      result.json().then((resp) => {
        console.log(resp)
        SetData(resp.data);

        if (resp.status === 200 ) {
          localStorage.setItem("cid",resp.data._id)
      }
          
      });
    });
  }


  // const [data,setData]=useState([])
  //  useEffect(()=>{
  //     getlist();
  //  },[]);

  //  const getlist = async ()=>{
  //    const data1 = await axios .get(`${url}/policy/lifecompare1/${abc}`).then((res)=>{
  //      console.log(res.data.data)
  //     //  setData(res.data)
  //    }).catch((err)=>{
  //      console.log(err)
  //    })
  //  }


  
  // policy 2222222


  // policy 333333

  return (
    <>
        <Header/>
        <div className={classes.basecontainer}>
        {/* <PolicylifehHeader /> */}

            <div className={classes.main}>
                <div> <button className={classes.comparebutton}  onClick={() => { navigate("/Lifecomparelist2");}}>Add onr more Policy</button> </div>
                
               
                            
                    <div className={classes.policy}>
                <div className={classes.main}>  
                    <div className={classes.policycontent}>      
                    <div className={classes.logos}>                              
                                <a className={classes.a} href="https://wa.me/9510542252">  <img className={classes.wp} src="../img/whatsapp.png" alt="" /> <p className={classes.p}>Share</p> </a>                         
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
    </>
  )
}

export default Lifecompare