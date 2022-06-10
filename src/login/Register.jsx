import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from '../header/Header';
import { url } from "../api";


const useStyles = makeStyles({
  basecontainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2em",
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
    // flexDirection:'column',
    marginTop: "2em",
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
    // display:'flex',
    marginTop: "30px",
    marginLeft: "25px",
  },
  formgroup2: {
    // display:'flex',
    // marginTop:'0.5em',
    marginLeft: "",
  },
  formgroup3: {
    marginTop: "12px",
    // marginLeft:'10px'
    cursor:'pointer',
  },
  male: {
    marginTop: "-3px",
    // marginBottom:'-10px'
  },
  female: {
    // marginBottom:'-10px',
    marginTop: "-3px",
    marginLeft: "20px",
  },
  radio: {
    display: "flex",
    // flexDirection:'column'
    cursor:'pointer',
  },
  label: {
    fontSize: "20px",
  },
//   input: {
//     marginTop: "6px",
//     minWidth: "18em",
//     height: "37px",
//     fontSize: "16px",
//     backgroundColor: "#f3f3f3",
//     border: 0,
//     borderRadius: "4px",
//     marginBottom: "31px",
//   },
  footer: {
    // marginTop: "25px",
    marginLeft: "-20px",
    // width: "150px",
    // cursor:'pointer',
    // marginBottom:"-5px"
    display:"flex"
  },
  btn: {
    fontSize: "21px",
    padding: "5px 20px",
    border: 0,
    backgroundColor: "#b3d9ff",
    color: "black",
    borderRadius: "20px",
    marginTop: "45px",
    marginLeft: "210px",
    cursor:'pointer',
  },
  apply: {
    fontSize: "25px",
    padding: "5px 20px",
    border: 0,
    color: "#3498bd",
    textDecoration: "underline black",
    cursor:'pointer',
    marginTop:"15px",
    marginLeft:"150px"
  },
  register: {
    textDecoration: "underline",
  },
//   back: {
//     background: "#e6f2ff",
//   },
  formdetail: {
    background: "#fff",
  },
  main: {
    display: "flex",
    marginLeft: "150px",
    paddingTop: "100px",
    height: "605px",

    // background:'#e6f2ff',
  },
  img: {
    // background:"#e6f2ff",
    height: "550px",
    width: "650px",
    // marginTop:'100px',
  },
  regimg: {
    // paddingTop:'100px'
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
    marginTop: "10px",
    cursor:'pointer',
    border:"solid 1px black"
  },
});

const Register = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    panno: "",
    gender: "",
    age: "",
    password: "",
  });
  const [sub, setSub] = useState("");

  const OnInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const Submite = async () => {
    const Sdata = await axios
      .post(`${url}/userIns/register`, data)
      .then((res) => {
        console.log(res);
        setSub(res);
        setData({
          name: "",
          email: "",
          number: "",
          panno: "",
          gender: "",
          age: "",
          password: "",
        });
        navigate('/login')

      })
      .catch((err) => {
        // console.log(err);
        alert('Email Already Exist')
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
            <img className={classes.img} src="../images/login.gif" alt="" />
          </div>

          <div className={classes.formdetail}>
            <form action="" onSubmit={OnSingup}>
              <div className={classes.basecontainer}>
                <div className={classes.header}>New Registration</div>
                <div className={classes.content}>
                  <div className={classes.form}>
                    <div className={classes.formsec1}>
                      <div className={classes.formgroup}>
                        <label htmlFor="User Name">User Name</label>
                        <input
                          className={classes.input}
                          type="text"
                          name="name"
                          value={data.name}
                          onChange={OnInput}
                          placeholder=""
                          required="true"
                        />
                      </div>
                      <div className={classes.formgroup}>
                        <label htmlFor="email">Email</label>
                        <input
                          className={classes.input}
                          type="email"
                          name="email"
                          value={data.email}
                          onChange={OnInput}
                          placeholder="@gmail.com"
                          required="true"
                          
                        />
                      </div>
                      <div className={classes.formgroup}>
                        <label htmlFor="PHONEno.">phone no.</label>
                        <input
                          className={classes.input}
                          type="text"
                          name="number"
                          value={data.number}
                          onChange={OnInput}
                          placeholder="+91"
                          required="true"
                          minLength={10}
                          maxLength={10}
                        />
                      </div>
                      <div className={classes.formgroup}>
                        <label htmlFor="email">PAN card</label>
                        <input
                          className={classes.input}
                          type="text"
                          name="panno"
                          value={data.panno}
                          onChange={OnInput}
                          placeholder=""
                          required="true"
                          minLength={8}
                          maxLength={8}
                        />
                      </div>
                    </div>
                    <div className={classes.formsec2}>
                      <div className={classes.formgroup1}>
                        <label className={classes.formgroup2} htmlFor="Gender">
                          Gender
                        </label>
                        <div className={classes.radio}>
                          <div className={classes.male}> male: </div>
                          <input
                            className={classes.formgroup3}
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={OnInput}
                            required="true"
                          />{" "}
                          <br />
                          <div className={classes.female}> Female: </div>
                          <input
                            className={classes.formgroup3}
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={OnInput}
                            required="true"
                          />
                        </div>
                      </div>
                      <div className={classes.formgroup}>
                        <label htmlFor="Age">Age</label>
                        <input
                          className={classes.input}
                          type="text"
                          name="age"
                          value={data.age}
                          onChange={OnInput}
                          placeholder=""
                          required="true"
                        />
                      </div>
                      <div className={classes.formgroup}>
                        <label htmlFor="Password">Password</label>
                        <input
                          className={classes.input}
                          type="text"
                          name="password"
                          value={data.password}
                          onChange={OnInput}
                          placeholder=""
                          required="true"
                        />
                      </div>
                  
                    </div>
                 
                  </div>
                  <div className={classes.footer}>
                        {/* <input className={classes.Register} type="submit" value="register"/> */}
                        <div>
                        <button type="submit" className={classes.btn} >
                          register
                        </button></div>
                        <div className={classes.btl}>
                    
                  </div>
                  
                      </div>
                      <p
                      type="submit"
                      className={classes.apply}
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      back to login
                    </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
