// import axios from "axios";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../../header/Header";
import { url } from "../../api";
const useStyles = makeStyles({
  Header: {
    display: "flex",
    marginTop:"20px"

  },
  p: {
    fontSize: "18px",
    marginLeft: "20px",
    color:"gray",
    marginTop:"20px"
  },
  h2:{
    fontSize: "20px",
    marginLeft: "50px",
    // color:"gray"
    marginRight:"50px"
  },
  main:{
    display:"flex",
    marginTop:"20px"
  },
  comparebtn:{
    height:"35px",
    // width:"130px",
    border:"solid 1px balck",
    background:"#region",
    borderRadius:"15px",
    display:"flex",
    fontSize:"18px",
    marginLeft:"70px",
    padding:"8px",

    marginTop:"35px"

  },
  
  img:{
    height:"25px",
    width:"25px",
    marginRight:"5px",
    marginLeft:"-5px"
  },
});

const PolicyHealthHeader = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [data, SetData] = useState([]);

  const [age, Setage] = useState("");
  const [annualincome, Setannualincome] = useState("");
  const [city, Setcity] = useState("");

  useEffect(() => {
    getList();
  }, []);

  function getList() {
    fetch(`${url}/HealthIns/user/view`).then((result) => {
      result.json().then((resp) => {
        console.log(resp.data);

        SetData(resp.data);

        Setage(resp.data[0].age[0]);
        Setannualincome(resp.data[0].annualincome[0]);
        Setcity(resp.data[0].city[0]);
      });
    });
  }
  return (
    <>
      {/* <Header/> */}
      {data.map((val) => {
        return (
          <>
            <div className={classes.main}>
              <div className={classes.Header}>
                <h2 className={classes.h2}>Find Best Insurence For</h2>

                <p className={classes.p}> Name - {val.fullname}   </p>
                <p className={classes.p}>|	&#160; Age - {val.age}</p>
                <p className={classes.p}>|	&#160;  Income - {val.annualincome}</p>

                <p className={classes.p}>|	&#160; City - {val.city}</p>
              </div>
              {/* <img className={classes.img} src="./img/compare.png" alt="" />  */}
          
              <button className={classes.comparebtn}  onClick={() => { navigate("/Healthcompareist1");}}>  <img className={classes.img} src="../images/compare.png" alt="" /> <cp> Compare</cp></button>
            </div>
          </>
        );
      })}
    </>
  );
};

export default PolicyHealthHeader;

// age: "21"
// annualincome: "230000"
// city: "surati"
// dateofbirth: "27-8-2002"
// fullname: "desai isha"
// gender: "female"
