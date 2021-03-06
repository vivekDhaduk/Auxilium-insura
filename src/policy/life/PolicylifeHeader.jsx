import React from 'react'
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../../header/Header";
import { url } from "../../api";

const useStyles = makeStyles({
  Header: {
    display: "flex",
    marginTop:"40px"

  },
  p: {
    fontSize: "18px",
    marginLeft: "20px",
    color:"gray"
  },
  h2:{
    fontSize: "20px",
    marginLeft: "50px",
    // color:"gray"
    marginRight:"50px",
    marginTop:"-0px"
  },
  main:{
    display:"flex",
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
})

const PolicylifeHeader = () => {
    const classes = useStyles();
    const navigate = useNavigate();


  const [header, SetHeader] = useState([]);
  useEffect(() => {
    getheader();
  }, []);
  function getheader() {
    fetch(`${url}/LifeIns/user/view`).then((result) => {
      result.json().then((resp) => {
        // console.log(resp.data);
        SetHeader(resp.data);
      });
    });
  }
  return (
    <>
     {header.map((val) => {
        return (
          <>
            <div className={classes.main}>

            <div className={classes.Header}>
            <h2 className={classes.h2}>Find Best Insurence For</h2>

              <p className={classes.p}>|	&#160;  Name - {val.fullname}</p>
              <p className={classes.p}>|	&#160;  Age - {val.age}</p>
              <p className={classes.p}>|	&#160;  Income - {val.annualincome}</p>
              <p className={classes.p}>|	&#160;  City - {val.city}</p>
            </div>
            {/* <img className={classes.img} src="./img/compare.png" alt="" />  */}
          
            <button className={classes.comparebtn}  onClick={() => { navigate("/Lifecomparelist");}}>  <img className={classes.img} src="../images/compare.png" alt="" /> <cp> Compare</cp></button>
            </div>
          </>
        );
      })}
    </>
  )
}

export default PolicylifeHeader