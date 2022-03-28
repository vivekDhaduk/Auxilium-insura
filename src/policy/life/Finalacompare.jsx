import React from 'react'
import { url } from '../../api'
import { useEffect } from 'react'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
// import PolicylifeHeader from './PolicylifeHeader'
import { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



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
    color:"##000",
    marginLeft:"200px"
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
    paddingLeft:"50px",
    width:"200px"
  },
  // charts:{
  //   display:"flex"
  // },
  charth3:{
    marginBottom:"30px"
  }

})
const Finalacompare = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const abc = localStorage.getItem("cid")
  const xyz = localStorage.getItem("cid2")
  const primumamt1 = localStorage.getItem("primumamt1")
  const primumamt2 = localStorage.getItem("primumamt2")
  const cover1 = localStorage.getItem("cover1")
  const cover2 = localStorage.getItem("cover2")
  const name1 = localStorage.getItem("name1")
  const name2 = localStorage.getItem("name2")
  const home=()=>{
    localStorage.removeItem("cid")
    localStorage.removeItem("cid2")
    navigate("/Lifepolicy")
}

const chartdata = [
  
  {
    
    name:name1,
    primumamount: primumamt1,
    cover:cover1,
  },
  {
    name: name2,
    primumamount: primumamt2,
    cover:cover2,
   
  },
];


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
  // ======================= basic policy detail start ==========================
  const [header, SetHeader] = useState([]);
  useEffect(() => {
    getheader();
  }, []);
  function getheader() {
    fetch(`${url}/LifeIns/user/view`).then((result) => {
      result.json().then((resp) => {
        console.log("header data",resp.data);
        SetHeader(resp.data);
      });
    });
  }
  return (
    <>
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
              {header.map((val) => {
                return(
                  <>
                  <div class="collapse navbar-collapse navbar-main-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="">BASIC DETAILS</a>
                        </li>
                        <li>
                            <a href="">|	&#160;  Name - {val.fullname}</a>
                        </li>
                        <li>
                            <a href="">|	&#160;  Age - {val.age}</a>
                        </li>
                        <li >
                            <a href="">|	&#160;  Income - {val.annualincome}</a>
                        </li>
                        <li>
                            <a href="">|	&#160;  City - {val.city}</a>
                        </li>
                    </ul>
               </div>
                  </>
                )
              })}
                     
             </div>
    </nav>
      <div className={classes.basecontainer}>
        <div className={classes.logo}>
            <div>
                <h4 className={classes.backtopolicy} onClick={home}> ⇐ back To Policy</h4>
            </div>
            <div className={classes.companylogo}>
                <img className={classes.img} src={data.logo} alt="" />
            </div>
            <div className={classes.companylogo2}>
                <img className={classes.img} src={data2.logo} alt="" />
            </div>
        </div>
        <div className={classes.policyditails}>
            <table className={classes.table}>
              <tr className={classes.tr}>
                <th className={classes.th}><h4>Premium</h4></th>
                <td className={classes.td}><button className={classes.primumamount}>₹  {data.primumamount}</button></td>
                <td className={classes.td2}><button className={classes.primumamount}>₹  {data2.primumamount}</button></td>
              </tr>
              <tr className={classes.tr}>
                <th className={classes.th}><h4>Max Coverage Upto</h4></th>
                <td className={classes.td}><h4>For  {data.timeduration} </h4></td>
                <td className={classes.td2}><h4>For  {data2.timeduration} </h4></td>
              </tr>
              <tr className={classes.tr}>
                <th className={classes.th}><h4>Claim Settlement Ratio</h4></th>
                <td className={classes.td}><h4>{data.cover}</h4></td>
                <td className={classes.td2}><h4>{data2.cover}</h4></td>
              </tr>
              <tr className={classes.tr}>
                <th className={classes.th}><h4>Medical Required</h4></th>
                <td className={classes.td}><h4>Tele Medical</h4></td>
                <td className={classes.td2}><h4>Physical Medical</h4></td>
              </tr>
              <tr className={classes.tr}>
                <th className={classes.th}><h4>Details</h4></th>
                <td className={classes.td}><h4>{data.shortdiscription}</h4></td>
                <td className={classes.td2}><h4>{data2.shortdiscription}</h4></td>
              </tr>
              <tr className={classes.tr}>
                <th className={classes.th}><h4>Free Look Period</h4></th>
                <td className={classes.td}><h4>30 Days</h4></td>
                <td className={classes.td2}><h4>30 Days</h4></td>
              </tr>
              <tr className={classes.tr}>
                <th className={classes.th}><h4>Tax Benefit</h4></th>
                <td className={classes.td}><h4>Yes</h4></td>
                <td className={classes.td2}><h4>Yes</h4></td>
              </tr>
              
            </table>
            <div className={classes.charts}>
                <div>
                  <h3 className={classes.charth3}>Primumamount</h3>
                  <ResponsiveContainer width="70%" aspect={3}>
                  <BarChart
                    width={20}
                    height={300}
                    data={chartdata}
                    margin={{
                      top: 5,
                      right: 430,
                      // left: 220,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                  
                    
                    <Bar dataKey="primumamount" fill="#8884d8" />

                  </BarChart>
                  
                </ResponsiveContainer>
              </div>
              <div>
                  <h3 className={classes.charth3}>Cover</h3>
                  <ResponsiveContainer width="70%" aspect={3}>
                  <BarChart
                    width={20}
                    height={300}
                    data={chartdata}
                    margin={{
                      top: 5,
                      right: 430,
                      // left: 220,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                  
                    <Bar dataKey="cover" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              </div>
          </div>
      </div>
      

    </>
  )
}

export default Finalacompare








// <div className={classes.basecontainer}>
//         <PolicylifeHeader />

//             <div className={classes.main}>         
//                     <div className={classes.policy}>
//                 <div className={classes.main}>  
//                     <div className={classes.policycontent}>      
//                     <div className={classes.logos}>                              
                                                       
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
 

//  {/* =============================== 2md list ====================== */}

//  <div className={classes.basecontainer}>
//         {/* <PolicylifehHeader /> */}

//             <div className={classes.main}>         
//                     <div className={classes.policy}>
//                 <div className={classes.main}>  
//                     <div className={classes.policycontent}>      
//                     <div className={classes.logos}>                              
                                                       
//                                 <img className={classes.img} src={data2.logo} alt="" />
//                             </div>
//                           <div className={classes.element}>
//                               <p>{data2.shortdiscription}</p>
//                               <h4>Claims Settled {data2.cover}</h4>
//                           </div>
//                           <div className={classes.element}>
//                                <h4>For  {data2.timeduration} </h4>
//                           </div>
//                               <div className={classes.element}>
//                               <button className={classes.primumamount}>₹{data2.primumamount}</button>
//                               <button class="viewdetails">View Details</button>
//                           </div>
//                     </div>
//                     <div class="dropdown3">
//                           <div class="dropbtn3">Why is this the best plan for you ? </div>
//                           <div class="dropdowncontent3"> <a>{data2.longdiscription}</a></div>
//                     </div>                   
//                 </div>                     
//           </div>  
         


//             </div>
//         </div>
// <button onClick={home}>back to home</button>

