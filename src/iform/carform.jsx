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
      },
      content: {
        display: "flex",
        flexDirection: "column",
      },
      form: {
        display: "flex",
        marginTop: "3em",
        alignItems: "center",
        fontSize: "18px",
      },
      formgroup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-Start",
        width: "fit-content",
        marginTop: "0.5em",
        marginLeft: "20px",
      },
      formgroup1: {
        marginTop: "30px",
        marginLeft: "25px",
      },
      formgroup2: {
       
        marginLeft: "",
      },
      formgroup3: {
        marginTop: "12px",
        cursor:'pointer',
      },
      male: {
        marginTop: "-4px",
        marginRight:"5px"
      },
      female: {
        marginTop: "-4px",
        marginLeft: "10px",
        marginRight:"5px"

      },
      radio: {
        display: "flex",
        cursor:'pointer',
        marginTop:"10px"
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
        marginTop: "55px",
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
        marginLeft:'80px',
        marginTop:"30px"
      },
      main: {
        display: "flex",
        marginLeft: "70px",
        paddingTop: "50px",
        height: "605px",
    
      },
      img: {
        height: "650px",
        width: "650px",
      },
      
      register: {
        width: "100px",
      },
      btl: {
        textAlign: "center",
        marginTop:"10px"
      },
      input: {
        height: "30px",
        width: "250px",
        borderRadius: "10px",
        cursor: "pointer",
        // marginTop: "10px",
        cursor:'pointer',
      },
      formsec1:{
        marginTop:"25px"
      }
      
})

const Carform = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const [data, setData] = useState({
        
        CarNumber: "",
        City: "",
        Company: "",
        Model: "",
        FuelType: "",
        CarRegisterYear:"",
      });
      const [sub, setSub] = useState("");
    
      const OnInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
      };
    
      const Submite = async () => {
        const Sdata = await axios
          .post(`${url}/carIns/user/insert`, data)
          .then((res) => {
            console.log(res);
            setSub(res);
            setData({
                CarNumber: "",
                City: "",
                Company: "",
                Model: "",
                FuelType: "",
                CarRegisterYear:"",
            });
            navigate("/Carpolicy")
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
            <img className={classes.img} src="../images/carform.gif" alt="" />
          </div>

          <div className={classes.formdetail}>
            <form action="" onSubmit={OnSingup}>
              <div className={classes.basecontainer}>
                <div className={classes.header}>Enter Your Car Details</div>
                <div className={classes.content}>
                  <div className={classes.form}>
                    <div className={classes.formsec1}>
                      <div className={classes.formgroup}>
                        <label htmlFor="carnumber">carnumber</label>
                        <input
                          className={classes.input}
                          type="text"
                          name="CarNumber"
                          value={data.CarNumber}
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
                      
                    </div>
                    
                    <div className={classes.formsec2}>
                    
                      <div className={classes.formgroup1}>
                        <label className={classes.formgroup2} htmlFor="fuel type">
                          Fuel Type
                        </label>
                        <div className={classes.radio}>
                            <div className={classes.male}> Patrol: </div>
                            <input
                                className={classes.formgroup3}
                                type="radio"
                                name="FuelType"
                                value="patrol"
                                onChange={OnInput}
                                required="true"
                            />{" "}
                            <br />
                            <div className={classes.female}> CNG: </div>
                            <input
                                className={classes.formgroup3}
                                type="radio"
                                name="FuelType"
                                value="CNG"
                                onChange={OnInput}
                                required="true"
                            />
                            <div className={classes.female}> Diesel: </div>
                            <input
                                className={classes.formgroup3}
                                type="radio"
                                name="FuelType"
                                value="diesel"
                                onChange={OnInput}
                                required="true"
                            />
                            </div>
                            {/* <br /> */}
                            
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
                        <label htmlFor="CarRegisterYear">Car Purchase Year</label>
                        <input
                          className={classes.input}
                          type="text"
                          name="CarRegisterYear"
                          value={data.CarRegisterYear}
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
                  {/* <div className={classes.btl}>
                    <p
                      type="submit"
                      className={classes.apply}
                      onClick={() => {
                        navigate("/Carpolicy");
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

    </>
  )
}

export default Carform