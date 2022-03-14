import React from 'react'
import { makeStyles } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
// import Header from "../../Header";
import { url } from "../../api";
const useStyles = makeStyles({
  Header: {
    display: "flex",
    marginTop:"20px"

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
    marginLeft:"50px",
    padding:"8px",

    marginTop:"15px"

  },
  
  img:{
    height:"25px",
    width:"25px",
    marginRight:"5px",
    marginLeft:"-5px"
  },
})


const PolicyCarHeader = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const [data, SetData] = useState([]);
  
    const [Company, SetCompany] = useState("");
    const [Model, SetModel] = useState("");
    const [RegistrationYear, SetCarRegisterYear] = useState("");
    const [City, Setcity] = useState("");
  
    useEffect(() => {
      getList();
    }, []);
  
    function getList() {
  
      fetch(`${url}/CarIns/user/view`).then((result) => {
        result.json().then((resp) => {
          console.log(resp.data);
  
          SetData(resp.data);
  
          SetCompany(resp.data[0].Company[0]);
          SetModel(resp.data[0].Model[0]);
          SetCarRegisterYear(resp.data[0].CarRegisterYearr[0]);
          Setcity(resp.data[0].City[0]);
        });
      });
    }
  return (
    <>
    {data.map((val) => {
      return (
        <>
            <div className={classes.main}>

          <div className={classes.Header}>
          <h2 className={classes.h2}>Find Best Insurence For</h2>
            <p className={classes.p}> |	&#160;  Company - {val.Company}</p>
            <p className={classes.p}> |	&#160; Model - {val.Model}</p>
            <p className={classes.p}>|	&#160;  RegistrationYear - {val.CarRegisterYear}</p>

            <p className={classes.p}>|	&#160; City - {val.City}</p>
          </div>
          {/* <img className={classes.img} src="./img/compare.png" alt="" />  */}
          
          <button className={classes.comparebtn}  onClick={() => { navigate("/Carcompare");}}>  <img className={classes.img} src="../images/compare.png" alt="" /> <cp> Compare</cp></button>
              </div>
        </>
      );
    })}
    </>
  )
}

export default PolicyCarHeader