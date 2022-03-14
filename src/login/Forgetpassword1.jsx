import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './login.css'
import Header from '../header/Header';
import { url } from "../api";


function Forgetpassword1() {
  const navigate = useNavigate();

  const [email, setEmail] = useState({
    email: "",
  });

  const [abc, setAbc] = useState("");

  const OnInput = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };
  const sub = async () => {
    const data = await axios
      .post(`${url}/userIns/sendmail`, email)
      .then((res) => {
        console.log(res);
        setAbc(res);
        setEmail({
          email: "",
        });

        navigate("/Changepassword1");
      })
      .catch((err) => {
        // console.log("err", err);
        alert("Email Not Register")
      });
  };
  const loginUser = async (e) => {
    e.preventDefault();
    sub();
  };

  return (
    <>    <Header/>
    <div className="basecont">
      <form className="full" onSubmit={loginUser}>
        {/* <img className="img1" src='./image/bg2.jpg' alt="" /> */}

        <div className="main1">
          <div className="gif">
            <img src="../images/fpass.gif" alt="" class="animatimg" />
          </div>

          <div className="main">
            <div className="imgcontainer1">
              <img src="../images/pfpass.gif" alt="Avatar" class="avatar" />
            </div>

            <div className="container1">
              <label for="uname">
                <b>Email</b>
              </label>
              <input
                className="text"
                type="text"
                placeholder="Enter Email"
                name="email"
                value={email.email}
                onChange={OnInput}
              />
              {/*     
        <label  for="psw"><b>OTP</b></label>
        <div className='otp'>
        <button className='text2' > Send Otp</button>
        <input className="text1" type="text" placeholder="Enter OTP" name="otp" value={email.otp} onChange={OnInput} />
        </div>
        <br/> */}
              <button className="text" type="submit">
                Send Otp
              </button>
              {/* <label>
          <input type="checkbox" checked="checked" name="remember"/> Remember me
        </label> */}
            </div>
            <div className="container1">
              <button
                type="button"
                class="cancelbtn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Cancel
              </button>

              {/* <span className="psw" onClick={()=>{
                       navigate('/change')}} >Change <a className="password" href="#">password?</a></span> */}
            </div>
          </div>
        </div>
      </form>
    </div>
    </>

  );
}

export default Forgetpassword1;
