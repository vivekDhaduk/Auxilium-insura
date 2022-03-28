import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect , useState} from "react";
import PolicylifehHeader from './PolicylifeHeader';
import { url } from "../../api";
import { makeStyles } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import Header from '../../header/Header'


const useStyles = makeStyles({
    basecontainer:{
      marginTop:"70px",
    background:'#f0f8fe',
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
    longdiscription:{
        marginLeft:"250px",
        marginTop:50,
        
    },
    question:{
        color:"rgb(77, 161, 240)" ,
        // marginTop:"20px",
        // marginLeft:"20px"   
    },
    question2:{
        color:"rgb(77, 161, 240)" ,
        marginTop:"30px",
        marginLeft:"20px"   
    },
    ans:{
        fontSize:"18px"
    },
    bestincluds:{
        marginLeft:"220px",
        marginTop:0,
        background:"#fff",
        padding:"50px",
        width:"900px",
        boxShadow:"5px 5px 20px lightgray",
        marginBottom:"40px"
    },
    emoji:{
        display:"flex",
        marginTop:"-20px"
    },
    emojicontainer:{
        marginLeft:"50px"
    },
    emojicontainer2:{
        marginLeft:"100px"
    },
    first:{
        display:"flex",
        boxShadow:"5px 5px 20px lightgray",
        marginTop:40,
        padding:10,
        
    },
    text:{
        marginLeft:20
    },
    emojiimg:{
        height:80,
        width:80
    },
    emojitext:{
        marginTop:"-10px"
    },
    expensses:{
        marginLeft:"220px",
        background:"#fff",
        padding:"40px",
        width:"920px",
        boxShadow:"5px 5px 20px lightgray",
        marginBottom:"20px",
      
    },
    p:{
        marginLeft:20,
        fontSize:18
    },
    cancle:{
        height:50,
        width:50 
    }
     
  })



const Lifeview = () => {


    const classes = useStyles();
  const navigate = useNavigate();
    const {id} = useParams();
    const abc = id;

  // policy 111111
  const dataa = [
    {
      name: 'Kotak',
      cover: 4700,
      primumamount: 8545,
      amt: 2400,
    }
  ];

  const [data, SetData] = useState([]);

  useEffect(() => {
    getList();
  }, []);


  function getList() {

    
    fetch(`${url}/policy/lifecompare1/${abc}`).then((result) => {
     
      result.json().then((resp) => {
        console.log(resp.data.data)
        SetData(resp.data);
        // SetLogo(resp.data.logo);
        // SetPrimumamount(resp.data.primumamount);
        // SetTimeduration(resp.data.timeduration);
        // SetDiscription(resp.data.shortdiscription);
        // SetCover(resp.data.cover);   
      });
    });
  }
console.log("setdata",data)
   return (
<>

<Header/>
{/* =====================policy basic detail start ============================x */}
        <div className={classes.basecontainer} id="viewlife">
        <PolicylifehHeader />
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
                    
                    <a href='https://wa.me/9510542252'><label className={classes.whatsapp}><img className={classes.wp} src='../images/whatsapp.png'/><p className={classes.wptext}>Share</p></label></a>
                    <button  onClick={() => { navigate(`/Contactlife/${data._id}`);}}>Need help ?</button>
                    
                    </div>
                </div>
            </ResponsiveContainer>
{/* =================== Question strat =================== */}
            <div className={classes.longdiscription}>
                <h2 className={classes.question}>What is special about this plan ?</h2>
                <p className={classes.ans}>• &#160;  {data.shortdiscription}</p>
                <p className={classes.ans}>• &#160;  {data.longdiscription}</p>
                <p className={classes.ans}>• &#160; This insurence plan can be cover Up to  {data.cover}</p>

                {/* <p className={classes.ans}>• &#160;  Exclusive covers like Recovery benefit, Wellness features like Fitness discount@ renewal, Health incentives for maintenance of health.</p>
                <p className={classes.ans}>• &#160;  Various discount options to like family discount, long term policy discount etc.</p>
                <p className={classes.ans}>• &#160;  Mental Health diseases are covered.</p> */}

            </div>
{/* ======================best includs =========================== */}
            <div className={classes.bestincluds}>
                <div className={classes.text}>
                    <h2 className={classes.question}>Benefits included :</h2>
                    <p className={classes.ans}>• &#160; Hospitalization means any in-patient treatment (min. 24 hrs stay) as well as the named 144 day care procedures.</p>
                    <p className={classes.ans}>• &#160; This policy covers accident related hospitalisation from day 1. Other hospitalisations are covered from 30 days after the policy start date.</p>
                    <p className={classes.ans}>• &#160; Exceptions : Any pre-existing diseases (PED) which are covered after 3 years . </p>
                    <p className={classes.ans}>• &#160; Please refer policy brochure for all exceptions and exclusions</p>
                </div>
                <hr size="1" width="90%" color="#4DA1F0"/> 
                <div >
                    <h2 className={classes.question2}>Other additional benefits :</h2>
                    {/* ========emojis start ============ */}
                    <div className={classes.emoji}>
                        <div className={classes.emojicontainer} >
                            <div className={classes.first}>
                                <img className={classes.emojiimg} src='../life/health.svg'/>
                                <div className={classes.text}>
                                    <h3>Free Health Check-up</h3>
                                    <p className={classes.emojitext}>Insured person will be entitled for<br/> Health Check up every year</p>
                                </div>
                            </div>
                            <div className={classes.first}>
                                <img className={classes.emojiimg} src='../life/ambu.svg'/>
                                <div className={classes.text}>
                                    <h3>Ambulance charges</h3>
                                    <p className={classes.emojitext}>Up to Rs. 2000</p>
                                </div>
                            </div>
                            <div className={classes.first}>
                                <img className={classes.emojiimg} src='../life/home.svg'/>
                                <div className={classes.text}>
                                    <h3>Domiciliary Hospitalisation</h3>
                                    <p className={classes.emojitext}>Covered up to As per Your policy</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className={classes.emojicontainer2}>
                            <div className={classes.first}>
                                <img className={classes.emojiimg} src='../life/recover.svg'/>
                                <div className={classes.text}>
                                    <h3>Recovery allowance</h3>
                                    <p className={classes.emojitext}>Covered upto Rs 5,000 if hospitalisation <br/>is for greater than 10 days</p>
                                </div>
                            </div>
                            <div className={classes.first}>
                                <img className={classes.emojiimg} src='../life/bed.svg'/>
                                <div className={classes.text}>
                                    <h3>60 days pre-hospitalisation</h3>
                                    <p className={classes.emojitext}>Expenses for 60 days covered</p>
                                </div>
                            </div>
                            <div className={classes.first}>
                                <img className={classes.emojiimg} src='../life/noclaim.svg'/>
                                <div className={classes.text}>
                                    <h3>Ambulance charges</h3>
                                    <p className={classes.emojitext}>Up to Rs. 2000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    {/* =======================out of expenses===================== */}
            <div className={classes.expensses}>
                <div className={classes.main}>
                    <h2 className={classes.question2}>Out Of Pocket expenses :</h2>
                    <p className={classes.p}>• &#160;You will bear all the expenses not covered by the policy. Refer to the list of such expenses in the Policy Exclusions<br/>
                     section below</p>
                    <p className={classes.p}>• &#160;If Tier 1B insured takes treatment in Tier 1A city then 20% co-pay.If Tier 2 insured takes treatment in Tier 1A or 1B then <br/>
                    20% co-pay.If insured opts for room where rent is less than and equal to 2500 or treatment is for an accident then <br/>
                    there is no co-pay</p>
                    <p className={classes.p}>• &#160;No restriction on room category and room rent</p>

                </div>

            </div>

            {/* ==================policy exclusion============== */}

            <div className={classes.expensses}>
            <h2 className={classes.question2}>Policy Exclusion :</h2>
                    {/* ========emojis start ============ */}
                    <div className={classes.emoji}>
                        <div className={classes.emojicontainer} >
                            <div className={classes.first}>
                                <img className={classes.cancle} src='../life/cancle.jpg'/>
                                <div className={classes.text}>
                                    <h3>Cosmetic surgery</h3>
                                    
                                </div>
                            </div>
                            <div className={classes.first}>
                                <img className={classes.cancle} src='../life/cancle.jpg'/>
                                <div className={classes.text}>
                                    <h3>self-inflicted injury</h3>
                                    
                                </div>
                            </div>
                            <div className={classes.first}>
                                <img className={classes.cancle} src='../life/cancle.jpg'/>
                                <div className={classes.text}>
                                    <h3>non-medical expenses</h3>
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div className={classes.emojicontainer2}>
                            <div className={classes.first}>
                                <img className={classes.cancle} src='../life/cancle.jpg'/>
                                <div className={classes.text}>
                                    <h3>drugs / alcohol abuse</h3>
                                   
                                </div>
                            </div>
                            <div className={classes.first}>
                                <img className={classes.cancle} src='../life/cancle.jpg'/>
                                <div className={classes.text}>
                                    <h3>war related injuries</h3>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>

            </div>
        </div>

{/* // ------------------------------chart start -------------------------------------- */}
   

      </>
    );
}

export default Lifeview


















 {/* <div>
      <ResponsiveContainer width="70%" aspect={2}>
        <BarChart
          width={70}
          height={300}
          data={dataa}
          margin={{
            top: 100,
            // right: 150,
            left: 450,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"  />
          <YAxis  />
          <Tooltip />
          <Legend />
          <Bar dataKey="primumamount" fill="#8884d8" />
          <Bar dataKey="cover" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={dataa}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="annualincome" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="primumamount" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>

      </div> */}