import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../header/Header";
import { url } from "../api";


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
        marginTop:"10px"
      },
      content: {
        display: "flex",
        flexDirection: "column",
      },
      form: {
        display: "flex",
        marginTop: "1em",
        alignItems: "center",
        fontSize: "18px",
        marginLeft:"30px"
      },
      formgroup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-Start",
        width: "fit-content",
        marginTop: "5px",
        marginLeft: "20px",
      },
      formgroup1: {
        marginTop: "0px",
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
        marginTop: "25px",
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
        marginTop: "35px",
        cursor:'pointer',
      },
      apply: {
        fontSize: "25px",
        padding: "5px 20px",
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
        marginLeft:'50px',
        
      },
      main: {
        display: "flex",
        marginLeft: "170px",
        // paddingTop: "50px",
        height: "605px",
        
    
      },
      img: {
        height: "650px",
        width: "650px",
      },
      regimg:{
          marginTop:'50px'
      },
      
      register: {
        width: "100px",
      },
      btl: {
        textAlign: "center",
      },
      input: {
        height: "30px",
        width: "250px",
        borderRadius: "10px",
        cursor: "pointer",
        marginTop: "7px",
        cursor:'pointer',
      },
       
    })


const Bikeform = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const [data, setData] = useState({
        
        BikeNumber: "",
        City: "",
        Company: "",
        Model: "",
        Variant:"",
        RegistrationYear:"",
      });
      const [sub, setSub] = useState("");
    
      const OnInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
      };
    
      const Submite = async () => {
        const Sdata = await axios
          .post(`${url}/BikeIns/user/insert`, data)
          .then((res) => {
            console.log(res);
            setSub(res);
            setData({
              BikeNumber: "",
              City: "",
              Company: "",
              Model: "",
              Variant:"",
              RegistrationYear:"",
            });
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
      <img className={classes.img} src="../images/bikeA.gif" alt="" />
    </div>

    <div className={classes.formdetail}>
      <form action="" onSubmit={OnSingup}>
        <div className={classes.basecontainer}>
          <div className={classes.header}>Enter Your Bike Details</div>
          <div className={classes.content}>
            <div className={classes.form}>
              <div className={classes.formsec1}>
                <div className={classes.formgroup}>
                  <label htmlFor="BikeNumber">BikeNumber</label>
                  <input
                    className={classes.input}
                    type="text"
                    name="BikeNumber"
                    value={data.BikeNumber}
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
                    name="City"
                    value={data.City}
                    onChange={OnInput}
                  //   placeholder="@gmail.com"
                    required="true"
                    
                  />
                </div>
                <div className={classes.formgroup}>
                  <label htmlFor="company">company</label>
                  <input
                    className={classes.input}
                    type="text"
                    name="Company"
                    value={data.Company}
                    onChange={OnInput}
                    required="true"
                    
                  />
                </div>
                <div className={classes.formgroup}>
                        <label htmlFor="model">model</label>
                        <input
                          className={classes.input}
                          type="text"
                          name="Model"
                          value={data.Model}
                          onChange={OnInput}
                          placeholder=""
                          required="true"
                        />
                </div>
                <div className={classes.formgroup}>
                        <label htmlFor="Variant">Variant</label>
                        <input
                          className={classes.input}
                          type="text"
                          name="Variant"
                          value={data.Variant}
                          onChange={OnInput}
                          placeholder=""
                          required="true"
                        />
                </div>
                <div className={classes.formgroup}>
                        <label htmlFor="RegistrationYear"> Purchase Year</label>
                        <input
                          className={classes.input}
                          type="text"
                          name="RegistrationYear"
                          value={data.RegistrationYear}
                          onChange={OnInput}
                          placeholder=""
                          required="true"
                        />
                      </div>
                
              </div>
              </div>
                  <div className={classes.btl}>
                        {/* <input className={classes.Register} type="submit" value="register"/> */}
                        <button type="submit" className={classes.btn}>
                          Submite
                        </button>
                      </div>
                  <div className={classes.btl}>
                    <p
                      type="submit"
                      className={classes.apply}
                      onClick={() => {
                        navigate("/Bikepolicy");
                      }}
                    >
                      Find Your Best Insurance
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bikeform