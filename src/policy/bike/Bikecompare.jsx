import React from 'react'
import Header from '../../header/Header'
// import Lifepolicy from './Lifepolicy'
import { makeStyles } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect , useState} from "react";
// import PolicylifehHeader from './PolicylifeHeader';
import { url } from "../../api";
import axios from 'axios';


const useStyles = makeStyles({
  basecontainer:{
    marginTop:"90px",
    background:"#f0f8fe",
    width:"1510px",
    padding:"50px"
  },
  logo:{
    display:"flex",
    background:"#fff",
    marginLeft:"-20px",
    width:"1450px",
    height:"120px",
    // paddingTop:"30px",
    boxShadow:"8px 8px 20px lightgray",
  },
  backtopolicy:{
    marginTop:"40px",
    color:"#00b2ce",
    marginLeft:"200px"
  },
  backtopolicy2:{
    marginTop:"40px",
    color:"#fff",
    marginLeft:"00px"
  },
  companylogo:{
    marginLeft:"270px",
  },
  companylogo2:{
    marginLeft:"270px",
  },
  img:{
    height:"100px",
    width:"150px",
    background:"#fff"
  },
  policyditails:{
    background:"#fff",
    margin:"50px",
    padding:"30px",
    width:"1200px",
    marginLeft:"100px",
    boxShadow:"8px 8px 20px lightgray",

  },
  table:{
    textAlign:"center"
  },
  tr:{
    
  },
  td:{
    width:"400px",
    height:"80px",
    paddingLeft:"200px"
  },
  td2:{
    width:"400px",
    paddingLeft:"200px"
  },
  th:{
    paddingLeft:"50px"
  }

})

const Bikecompare = () => {
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

    
    fetch(`${url}/policy/bikecompare3/${abc}`).then((result) => {
     
      result.json().then((resp) => {
        console.log(resp)
        SetData(resp.data);

        if (resp.status === 200 ) {
          localStorage.setItem("cid",resp.data._id)
          localStorage.setItem("cover1",resp.data.cover)
          localStorage.setItem("name1",resp.data.name)
      }
          
      });
    });
  }


  

  return (
    <>
        <Header/>
        <div className={classes.basecontainer}>
        <div className={classes.logo}>
            <div>
                <h4 className={classes.backtopolicy} onClick={() => { navigate("/Bikepolicy");}}> ⇐ back To Policy</h4>
            </div>
            <div className={classes.companylogo}>
                <img className={classes.img} src={data.logo} alt="" />
            </div>
            <div className={classes.companylogo2}>
                {/* <img className={classes.img} src={data2.logo} alt="" /> */}
                <button className={classes.backtopolicy2}  onClick={() => { navigate("/Bikecomparelist2");}} >  +  Add Policy</button>

            </div>
        </div>
        <div className={classes.policyditails}>
            <table className={classes.table}>
              <tr className={classes.tr}>
                <th className={classes.th}><h4>Premium</h4></th>
                <td className={classes.td}><button className={classes.primumamount}>₹  {data.primumamount}</button></td>
                {/* <td className={classes.td2}><button className={classes.primumamount}>₹  {data2.primumamount}</button></td> */}
              </tr>
              <tr className={classes.tr}>
                <th className={classes.th}><h4>Max Coverage Upto</h4></th>
                <td className={classes.td}><h4>For  {data.timeduration} </h4></td>
                {/* <td className={classes.td2}><h4>For  {data2.timeduration} </h4></td> */}
              </tr>
              <tr className={classes.tr}>
                <th className={classes.th}><h4>Claim Settlement Ratio</h4></th>
                <td className={classes.td}><h4>{data.cover}</h4></td>
                {/* <td className={classes.td2}><h4>{data2.cover}</h4></td> */}
              </tr>
              <tr className={classes.tr}>
                <th className={classes.th}><h4>Medical Required</h4></th>
                <td className={classes.td}><h4>Tele Medical</h4></td>
                {/* <td className={classes.td2}><h4>Physical Medical</h4></td> */}
              </tr>
              <tr className={classes.tr}>
                <th className={classes.th}><h4>Free Look Period</h4></th>
                <td className={classes.td}><h4>30 Days</h4></td>
                {/* <td className={classes.td2}><h4>30 Days</h4></td> */}
              </tr>
              <tr className={classes.tr}>
                <th className={classes.th}><h4>Tax Benefit</h4></th>
                <td className={classes.td}><h4>Yes</h4></td>
                {/* <td className={classes.td2}><h4>Yes</h4></td> */}
              </tr>
              <tr className={classes.tr}>
                <th className={classes.th}><h4>Details</h4></th>
                <td className={classes.td}><h4>{data.shortdiscription}</h4></td>
                {/* <td className={classes.td2}><h4>{data2.shortdiscription}</h4></td> */}
              </tr>
            </table>
          </div>
      </div>
        
    </>
  )
}

export default Bikecompare



// <div className={classes.basecontainer}>
//         {/* <PolicylifehHeader /> */}

//             <div className={classes.main}>
//                 <div> <button className={classes.comparebutton}  onClick={() => { navigate("/Lifecomparelist2");}}>Add onr more Policy</button> </div>
                
               
                            
//                     <div className={classes.policy}>
//                 <div className={classes.main}>  
//                     <div className={classes.policycontent}>      
//                     <div className={classes.logos}>                              
//                                 <a className={classes.a} href="https://wa.me/9510542252">  <img className={classes.wp} src="../img/whatsapp.png" alt="" /> <p className={classes.p}>Share</p> </a>                         
//                                 <img className={classes.img} src={data.logo} alt="" />
//                             </div>
//                           <div className={classes.element}>
//                               <p>{data.shortdiscription}</p>
//                               <h4>Claims Settled {data.cover}</h4>
//                           </div>
//                           <div className={classes.element}>
//                                <h4>For  {data.timeduration} </h4>
//                           </div>
//                               <div className={classes.element}>
//                               <button className={classes.primumamount}>₹{data.primumamount}</button>
//                               <button class="viewdetails">View Details</button>
//                           </div>
//                     </div>
//                     <div class="dropdown3">
//                           <div class="dropbtn3">Why is this the best plan for you ? </div>
//                           <div class="dropdowncontent3"> <a>{data.longdiscription}</a></div>
//                     </div>                   
//                 </div>                     
//           </div>  
         


//             </div>
//         </div>