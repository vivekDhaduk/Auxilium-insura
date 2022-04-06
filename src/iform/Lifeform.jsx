import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../header/Header";
import { url } from "../api";
import Lifechart from "./Lifechart";


const useStyles = makeStyles({
    basecontainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "5em",
        height: "100%",
      },
    
      header: {
        fontSize: "30px",
        color: "#3498bd",
      },
      content: {
        display: "flex",
        flexDirection: "column",
      },
      form: {
        display: "flex",
        // marginTop: "2em",
        alignItems: "center",
        fontSize: "18px",
      },
      formgroup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-Start",
        width: "fit-content",
        // marginTop: "0.5em",
        marginLeft: "20px",
      },
      formgroup1: {
        marginTop: "10px",
        marginLeft: "25px",
      },
      formgroup2: {
       
        marginLeft: "",
      },
      formgroup3: {
        marginTop: "12px",
        cursor:'pointer',
      },
     
      
      label: {
        fontSize: "20px",
      },
    
      footer: {
        // marginTop: "25px",
        marginLeft: "50px",
        width: "150px",
        
      },
      btn: {
        fontSize: "21px",
        padding: "5px 20px",
        border: 0,
        backgroundColor: "#b3d9ff",
        color: "black",
        borderRadius: "20px",
        marginTop: "16px",
        cursor:'pointer',
      },
      apply: {
        fontSize: "25px",
        padding: "px 20px",
        border: 0,
        color: "#3498bd",
        textDecoration: "underline black",
        cursor:'pointer',
      },
      register: {
        textDecoration: "underline",
      },
    
      formdetail: {
        background: "#fff",
        marginLeft:'80px',
        marginTop:"30px"
      },
      main: {
        display: "flex",
        marginLeft: "170px",
        // paddingTop: "50px",
        height: "605px",
        
    
      },
      img: {
        height: "600px",
        width: "600px",
      },
      regimg:{
          marginTop:'100px'
      },
      
      register: {
        width: "100px",
      },
      btl: {
        textAlign: "center",
      },
      input: {
        height: "20px",
        width: "250px",
        borderRadius: "10px",
        cursor: "pointer",
        marginTop: "10px",
        cursor:'pointer',
      },
      chart:{
        height: "100%",
        width: "100%",
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"150px",
        marginLeft:"130px"
      },
      apply2: {
        fontSize: "30px",
        padding: "px 20px",
        border: 0,
        color: "#8884d8",
        // textDecoration: "underline black",
        cursor:'pointer',
      },
       
    })

const Lifeform = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const [data, setData] = useState({
        
      gender: "",
      fullname: "",

      age: "",
      dateofbirth: "",
      city:"",
      annualincome:"",
      nominee:""
      });
      const [sub, setSub] = useState("");
    
      const OnInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
      };
    
      const Submite = async () => {
        const Sdata = await axios
          .post(`${url}/LifeIns/user/insert`, data)
          .then((res) => {
            console.log(res);
            setSub(res);
            setData({
              gender: "",
              fullname: "",
        
              age: "",
              dateofbirth: "",
              city:"",
              annualincome:"",
              nominee:""
            });
            navigate('/Lifepolicy')
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      const OnSingup = (e) => {
        e.preventDefault();
        Submite();
        
      };
  return (
    <>
          <Header />

<div className={classes.back}>
  <div className={classes.main}>
    <div className={classes.regimg}>
      {" "}
      <img className={classes.img} src="../images/lifeform.gif" alt="" />
    </div>

    <div className={classes.formdetail}>
      <form action="" onSubmit={OnSingup}>
        <div className={classes.basecontainer}>
          {/* <div className={classes.header}>Enter Your Details</div> */}
          <div className={classes.content}>
            <div className={classes.form}>
              <div className={classes.formsec1}>
                <div className={classes.formgroup}>
                  <label htmlFor="gender">Gender</label>
                  <input
                    className={classes.input}
                    type="text"
                    name="gender"
                    value={data.gender}
                    onChange={OnInput}
                    placeholder=""
                    required="true"
                  />
                </div>
                <div className={classes.formgroup}>
                  <label htmlFor="fullname">fullname</label>
                  <input
                    className={classes.input}
                    type="text"
                    name="fullname"
                    value={data.fullname}
                    onChange={OnInput}
                  //   placeholder="@gmail.com"
                    required="true"
                    
                  />
                </div>
                <div className={classes.formgroup}>
                  <label htmlFor="age">age</label>
                  <input
                    className={classes.input}
                    type="text"
                    name="age"
                    value={data.age}
                    onChange={OnInput}
                    required="true"
                    
                  />
                </div>
                <div className={classes.formgroup}>
                        <label htmlFor="dateofbirth">Date of Birth</label>
                        <input
                          className={classes.input}
                          type="text"
                          name="dateofbirth"
                          value={data.dateofbirth}
                          onChange={OnInput}
                          placeholder=""
                          required="true"
                        />
                </div>
                <div className={classes.formgroup}>
                        <label htmlFor="city">city</label>
                        <input
                          className={classes.input}
                          type="text"
                          name="city"
                          value={data.city}
                          onChange={OnInput}
                          placeholder=""
                          required="true"
                        />
                      </div>
                      <div className={classes.formgroup}>
                  <label htmlFor="annualincome">annualincome</label>
                  <input
                    className={classes.input}
                    type="text"
                    name="annualincome"
                    value={data.annualincome}
                    onChange={OnInput}
                  //   placeholder="@gmail.com"
                    required="true"
                    
                  />
                </div><div className={classes.formgroup}>
                  <label htmlFor="nominee">Purchase insurence For</label>
                  <input
                    className={classes.input}
                    type="text"
                    name="nominee"
                    value={data.nominee}
                    onChange={OnInput}
                  //   placeholder="@gmail.com"
                    required="true"
                    
                  />
                </div>
                
              </div>
              </div>
                  <div className={classes.btl}>
                        {/* <input className={classes.Register} type="submit" value="register"/> */}
                        <button type="submit" className={classes.btn} >
                          Submite
                        </button>
                      </div>
                  {/* <div className={classes.btl}>
                    <p
                      type="submit"
                      className={classes.apply}
                      onClick={() => {
                        navigate("/Lifepolicy");
                      }}
                    >
                      Find Your Best Insurance
                    </p>
                  </div> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className={classes.chart}>
        <h1 className={classes.apply2}>Help you to find Top Policy</h1>
      <Lifechart/>
      </div> */}
    </>
  )
}

export default Lifeform