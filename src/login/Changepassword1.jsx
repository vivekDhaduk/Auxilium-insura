import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import Header from "../header/Header";
import { url } from "../api";

function Changepassword1() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    otp: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [sub, setSub] = useState("");

  const OnInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    // console.log("efgh",setData)
  };

  const Submite = async () => {
    const h1 = { ...data, otp: Number(data.otp) };

    // console.log("sdfghjk",h1)
    await axios
      .post(`${url}/userIns/changepass`, h1)
      .then((res) => {
        console.log(res);
        setSub(res);
        setData({
          otp: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        alert("Your Password Chnage Successfully");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("Detail Not Match");
      });
  };
  const OnSingup = (e) => {
    e.preventDefault();
    Submite();
  };
  return (
    <>
      <Header />
      <div className="background">
        <form className="basecont" onSubmit={OnSingup}>
          <div className="full">
            {/* <img className="img1" src='./image/bg2.jpg' alt="" /> */}

            <div className="main1">
              <div className="gif">
                <img src="../images/cpass.gif" alt="" class="animatimg" />
              </div>

              <div className="main">
                <div className="imgcontainer1">
                  <img
                    className="pcpass1"
                    src="../images/pcpass1.gif"
                    alt="Avatar"
                    class="avatar"
                  />
                </div>

                <div className="container1">
                  <label for="uname">
                    <b>Email</b>
                  </label>
                  <input
                    className="text"
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    value={data.email}
                    onChange={OnInput}
                    required
                  />
                  <label for="uname">
                    <b>OTP</b>
                  </label>
                  <input
                    className="text"
                    type="text"
                    placeholder="Enter OTP"
                    name="otp"
                    value={data.otp}
                    onChange={OnInput}
                    required
                  />

                  <label for="uname">
                    <b>New Password</b>
                  </label>
                  <input
                    className="text"
                    type="password"
                    placeholder="Enter New Password"
                    name="password"
                    value={data.password}
                    onChange={OnInput}
                    required
                  />

                  <label for="psw">
                    <b>Confirm Password</b>
                  </label>
                  <input
                    className="text"
                    type="password"
                    placeholder="Enter Confirm Password "
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={OnInput}
                    required
                  />
                  <div className="changepassbtn">
                    <button className="text" type="submit" class="submitbtn">
                      Submit
                    </button>
                    <button
                      type="button"
                      class="cancelbtn"
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Changepassword1;
