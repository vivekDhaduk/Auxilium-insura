import React from "react";

import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { useState } from "react";
import axios from "axios";
import { url } from "../api";

const useStyles = makeStyles({
  base: {
    // background:'#e6f2ff',
    height: "605px",
    width: "100%",
    boxShadow: "8px 8px 15px gray",
  },
  basecontainer: {
    width: "1500px",
    display: "flex",
    // flexDirection:'column',
    alignItems: "center",
    marginTop: "5em",
    // display: "flex",
    // background:'#cce0ff',
    // paddingLeft:"350px",
    paddingLeft: "300px",
    paddingTop: "100px",
    marginRight: "-350px",
    //
    //
  },

  header: {
    fontSize: "24px",
    // marginTop:"5px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginTop: "2em",
    alignItems: "center",
  },
  formgroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-Start",
    width: "fit-content",
    marginTop: "0.5em",
  },
  label: {
    fontSize: "20px",
  },

  footer: {
    marginTop: "2em",
  },
  btn: {
    fontSize: "21px",
    padding: "5px 20px",
    border: 0,
    backgroundColor: "#b3d9ff",
    color: "black",
    borderRadius: "20px",
    cursor: "pointer",
  },
  btn2: {
    fontSize: "18px",
    padding: "5px 20px",
    border: 0,
    backgroundColor: "#b3d9ff",
    color: "black",
    borderRadius: "20px",
    cursor: "pointer",
  },
  apply: {
    fontSize: "21px",
    padding: "5px 20px",
    border: 0,
    color: "#3498bd",
    paddingBottom: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  register: {
    textDecoration: "underline",
    // borderBottom:"solid 1px black",
    display: "flex",
  },
  main: {
    // width:'100%',
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5px",
    // display: "flex",
    background: "#fff",
    // marginTop: "-px",
    paddingtop: "10px",
    paddingLeft: "10px",
    paddingRight: "50px",
    marginLeft: "100px",
  },
  img: {
    height: "450px",
    width: "480px",
    borderRadius: "50px",
  },
  leftimg: {
    // marginTop:'180px',
    background: "#fff",
    // marginLeft:"400px",
    // paddingtop:'50px',
    // paddingLeft:'50px',
    // paddingBottom:'50px'
  },
  input: {
    height: "30px",
    width: "250px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  input2: {
    height: "30px",
    width: "250px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  text: {
    fontSize: "20px",
    marginBottom: "20px",
    marginTop: "5px",
  },
  border: {
    display: "flex",
    // border:'solid black 1px',
    // borderRadius: '50px',
  },
});

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [email, setEmail] = useState({
    email: "",
    password: "",
  });

  const OnInput = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };
  // const[password, setPassword] = useState("");

  const sub = async (e) => {
    // e.preventDefault();
    const data = await axios
      .post(`${url}/userIns/login`, email)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          localStorage.setItem("jwt", res.data.token);
          localStorage.setItem("id", res.data._id);
          navigate("/");
        }
      })
      .catch((err) => {
        alert("invalid username or password");
      });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    sub();
  };

  return (
    <>
      <Header />
      <br />

      <div className={classes.base}>
        <div className={classes.basecontainer}>
          <div className={classes.border}>
            <div className={classes.leftimg}>
              <img
                className={classes.img}
                src="../images/undraw_Access_account_re_8spm.png"
                alt=""
              />
            </div>
            <div className={classes.main}>
              <div className={classes.header}>Log in</div>
              <div className={classes.content}>
                <form method="POST" className={classes.form}>
                  <div className={classes.formgroup}>
                    <label htmlFor="email" className={classes.text}>
                      Email
                    </label>
                    <input
                      className={classes.input}
                      type="email"
                      name="email"
                      placeholder="Enter your E-mail"
                      value={email.email}
                      onChange={OnInput}
                      required="true"
                      //   minLength={10}
                      //   maxLength={10}
                    />
                  </div>
                  <div className={classes.formgroup}>
                    <label label htmlFor="Password" className={classes.text}>
                      password
                    </label>
                    <input
                      className={classes.input2}
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={email.password}
                      onChange={OnInput}
                      required="true"
                    />
                  </div>
                </form>
              </div>

              <div className={classes.footer}>
                <button
                  onClick={loginUser}
                  type="submit"
                  className={classes.btn}
                >
                  Log in
                </button>
              </div>

              <div className={classes.register}>
                <p
                  type="submit"
                  className={classes.apply}
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Register
                </p>
              </div>
              <div className={classes.register}>
                <p
                  className={classes.apply}
                  onClick={() => {
                    navigate("/Forgetpassword1");
                  }}
                >
                  forgot password ?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
